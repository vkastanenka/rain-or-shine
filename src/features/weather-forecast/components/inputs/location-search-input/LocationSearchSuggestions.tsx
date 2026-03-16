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
import {
  type LocationSearchSuggestionsProps,
  type LocationSearchSuggestionsLinkProps,
  type LocationSearchResultsHeaderProps,
} from "./types";
import { cn } from "@/utils";

const HEADER_PADDING = "p-4";
const HEADER_BG_COLOR = "bg-neutral";

const Header = ({ children }: { children: React.ReactNode }) => (
  <div className={cn("w-full", HEADER_PADDING, HEADER_BG_COLOR, "py-7")}>
    <Text>{children}</Text>
  </div>
);

const RecentLocationsHeader = ({
  children,
  onDelete,
}: {
  children: React.ReactNode;
  onDelete: () => void;
}) => (
  <FlexRow
    fit
    align="center"
    justify="between"
    gap={2}
    className={cn("w-full", HEADER_PADDING, HEADER_BG_COLOR)}
  >
    <Text>{children}</Text>
    <Button
      onClick={() => {
        deleteRecentLocations();
        onDelete();
      }}
      shape="circle"
    >
      <FaTimes />
    </Button>
  </FlexRow>
);

const LocationResultsHeader = ({
  children,
  className,
  currentCountryCode,
  scopeIsGlobal,
  toggleScopeIsGlobal,
}: LocationSearchResultsHeaderProps) => {
  return (
    <FlexRow
      fit
      gap={2}
      align="center"
      justify="between"
      className={cn(HEADER_PADDING, HEADER_BG_COLOR, className)}
    >
      <Text>{children}</Text>
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
          onClick={() => scopeIsGlobal && toggleScopeIsGlobal()}
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
          onClick={() => !scopeIsGlobal && toggleScopeIsGlobal()}
        >
          <FcGlobe />
        </button>
      </div>
    </FlexRow>
  );
};

export const LocationLinks = ({
  results,
  onClickSuggestion,
}: LocationSearchSuggestionsLinkProps) => {
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
          onClick={() => onClickSuggestion(loc)}
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

export const LocationSearchSuggestions = ({
  query,
  debouncedQuery,
  isLoading,
  results,
  recentLocations,
  listIsOpen,
  onClickSuggestion,
  currentCountryCode,
  scopeIsGlobal,
  toggleScopeIsGlobal,
  onDeleteRecent,
}: LocationSearchSuggestionsProps) => {
  const recentLocationsComponent =
    recentLocations && recentLocations.length > 0 ? (
      <FlexCol>
        <RecentLocationsHeader onDelete={onDeleteRecent}>
          {LABELS.recentLocations}
        </RecentLocationsHeader>
        <LocationLinks
          results={recentLocations}
          onClickSuggestion={onClickSuggestion}
        />
      </FlexCol>
    ) : null;

  const locationResultsComponent = isLoading ? (
    <Header>{LABELS.isLoadingMessage}</Header>
  ) : (
    <FlexCol>
      <LocationResultsHeader
        currentCountryCode={currentCountryCode}
        scopeIsGlobal={scopeIsGlobal}
        toggleScopeIsGlobal={toggleScopeIsGlobal}
      >
        {LABELS.locations}
      </LocationResultsHeader>
      {results && results.length > 0 && debouncedQuery ? (
        <LocationLinks
          results={results}
          onClickSuggestion={onClickSuggestion}
        />
      ) : (
        <div className={cn("w-full", HEADER_PADDING, "py-7")}>
          <Text>{!query ? LABELS.searchToFind : LABELS.noLocationsFound}</Text>
        </div>
      )}
    </FlexCol>
  );

  return (
    <AnimatePresence>
      {listIsOpen && (
        <motion.div
          key="location-suggestions-panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { type: "spring", duration: 0.5, bounce: 0 },

            opacity: { duration: 0.2 },
          }}
          layout
          style={{ transformOrigin: "top" }}
          className="input-suggestions-container overflow-hidden"
        >
          <motion.div layout="position" className="flex flex-col w-full">
            {recentLocationsComponent}
            {locationResultsComponent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
