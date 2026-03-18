import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FcGlobe } from "react-icons/fc";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import {
  Button,
  FlexCol,
  FlexRow,
  Text,
  LazyCountryFlagIcon,
  type CountryFlagIconName,
} from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LABELS } from "./constants";
import { cn } from "@/utils";
import { useLocationSearch } from "./context";
import {
  useStorage,
  STORAGE_KEY_MAP,
  useSaveRecentLocation,
  type ValidWeatherPathLocation,
} from "@/services";

const HEADER_PADDING = "p-4";
const HEADER_BG_COLOR = "bg-neutral";

export const LocationLinks = ({
  locations,
}: {
  locations: ValidWeatherPathLocation[];
}) => {
  const { setListIsOpen } = useLocationSearch();
  const { mutate: saveRecent } = useSaveRecentLocation();
  return (
    <>
      {locations.map((loc) => (
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
            saveRecent(loc);
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
  const [recentLocations, setRecentLocations] = useStorage(
    STORAGE_KEY_MAP.recentLocations,
  );

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
        <Button shape="circle" onClick={() => setRecentLocations([])}>
          <FaTimes />
        </Button>
      </FlexRow>
      <LocationLinks locations={recentLocations} />
    </FlexCol>
  ) : null;
};

const SearchSuggestions = () => {
  const {
    query,
    debouncedQuery,
    isLoading,
    results,
    countryCode,
    scopeIsGlobal,
    defaultSearchCount,
    maxSearchCount,
    searchCount,
    setSearchCount,
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
            <LazyCountryFlagIcon name={countryCode as CountryFlagIconName} />
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
        <LocationLinks locations={results} />
      ) : (
        <div className="w-full">
          <div className={cn("w-full", HEADER_PADDING, "py-7")}>
            <Text>
              {!query ? LABELS.searchToFind : LABELS.noLocationsFound}
            </Text>
          </div>
          {query && debouncedQuery && searchCount === defaultSearchCount ? (
            <Button
              color="neutral"
              onClick={() => setSearchCount(maxSearchCount)}
              className={cn("w-full", HEADER_PADDING, "py-7", "rounded-none")}
            >
              {LABELS.expandSearchBreadth}
              <FaArrowRight />
            </Button>
          ) : null}
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
