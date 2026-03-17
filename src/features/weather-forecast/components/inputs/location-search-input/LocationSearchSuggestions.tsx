import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FcGlobe } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { Button, FlexCol, FlexRow, Text } from "@/components";
import {
  deleteRecentLocations,
  formatWeatherUrlPath,
} from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LocationSearchFlag } from "./LocationSearchFlag";
import { LABELS } from "./constants";
import { type LocationSearchSuggestionsLinkProps } from "./types";
import { cn } from "@/utils";
import { saveRecentLocation } from "@/features/weather-forecast/utils";
import { useLocationSearch } from "./context";

const HEADER_PADDING = "p-4";
const HEADER_BG_COLOR = "bg-neutral";

export const LocationLinks = ({
  results,
}: LocationSearchSuggestionsLinkProps) => {
  const { setListIsOpen } = useLocationSearch();
  return (
    <>
      {results.map((loc) => (
        <Link
          key={loc.id}
          to={formatWeatherUrlPath(
            loc.country_code,
            loc.admin1,
            loc.name,
            FORECAST_PERIOD_MAP.current,
          )}
          className="input-suggestions-link"
          onClick={() => {
            saveRecentLocation(loc);
            setListIsOpen(false);
          }}
        >
          <Text type="large" className="font-medium">
            {loc.name}
          </Text>
          <Text className="opacity-70">
            {loc.admin1}, {loc.country}
          </Text>
        </Link>
      ))}
    </>
  );
};

const RecentLocations = () => {
  const { recentLocations, refreshRecentLocations } = useLocationSearch();

  return recentLocations && recentLocations.length > 0 ? (
    <FlexCol>
      <FlexRow
        fit
        gap={2}
        align="center"
        justify="between"
        className={cn("w-full", HEADER_PADDING, HEADER_BG_COLOR)}
      >
        <Text>{LABELS.recentLocations}</Text>
        <Button
          shape="circle"
          onClick={() => {
            refreshRecentLocations();
            deleteRecentLocations();
          }}
        >
          <FaTimes />
        </Button>
      </FlexRow>
      <LocationLinks results={recentLocations} />
    </FlexCol>
  ) : null;
};

const SearchSuggestions = () => {
  const {
    query,
    debouncedQuery,
    isLoading,
    results,
    currentCountryCode,
    scopeIsGlobal,
    setScopeIsGlobal,
  } = useLocationSearch();

  return isLoading ? (
    <div className={cn("w-full", HEADER_PADDING, HEADER_BG_COLOR, "py-7")}>
      <Text>{LABELS.isLoadingMessage}</Text>
    </div>
  ) : (
    <FlexCol>
      <FlexRow
        fit
        gap={2}
        align="center"
        justify="between"
        className={cn(
          "sticky",
          "top-0",
          HEADER_PADDING,
          HEADER_BG_COLOR,
          "z-60",
        )}
      >
        <Text>{LABELS.locations}</Text>
        <div role="tablist" className="tabs tabs-box">
          <button
            type="button"
            className={cn(
              "tab",
              !scopeIsGlobal && "tab-active",
              scopeIsGlobal && "opacity-70",
              scopeIsGlobal && "hover:opacity-100",
              "transition-all",
            )}
            onClick={() =>
              scopeIsGlobal && setScopeIsGlobal((prevState) => !prevState)
            }
          >
            <LocationSearchFlag code={currentCountryCode} />
          </button>
          <button
            type="button"
            className={cn(
              "tab",
              scopeIsGlobal && "tab-active",
              !scopeIsGlobal && "opacity-70",
              !scopeIsGlobal && "hover:opacity-100",
              "transition-all",
            )}
            onClick={() =>
              !scopeIsGlobal && setScopeIsGlobal((prevState) => !prevState)
            }
          >
            <FcGlobe />
          </button>
        </div>
      </FlexRow>
      {results && results.length > 0 && debouncedQuery ? (
        <LocationLinks results={results} />
      ) : (
        <div className={cn("w-full", HEADER_PADDING, "py-7")}>
          <Text>{!query ? LABELS.searchToFind : LABELS.noLocationsFound}</Text>
        </div>
      )}
    </FlexCol>
  );
};

export const LocationSearchSuggestions = () => {
  const { listIsOpen } = useLocationSearch();

  return (
    <AnimatePresence>
      {listIsOpen && (
        <motion.div
          key="location-suggestions-panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: "spring", duration: 0.3, bounce: 0 },
            opacity: { duration: 0.2 },
          }}
          layout
          style={{ transformOrigin: "top" }}
          className="input-suggestions-container"
        >
          <motion.div layout="position">
            <RecentLocations />
            <SearchSuggestions />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
