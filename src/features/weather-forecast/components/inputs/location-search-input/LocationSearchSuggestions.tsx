import { Link } from "@tanstack/react-router";
import { CA } from "country-flag-icons/react/3x2";
import { FcGlobe } from "react-icons/fc";
import { Button, Flex, FlexCol, FlexRow, Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
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
  <div className={cn("w-full", HEADER_PADDING, HEADER_BG_COLOR)}>
    <Text>{children}</Text>
  </div>
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
      className={cn("p-4", HEADER_PADDING, HEADER_BG_COLOR, className)}
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
          <CA className="w-4" />
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

export const LocLinks = ({
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
  isLoading,
  results,
  recentLocations,
  listIsOpen,
  onClickSuggestion,
  currentCountryCode,
  scopeIsGlobal,
  toggleScopeIsGlobal,
}: LocationSearchSuggestionsProps) => {
  if (!listIsOpen) return null;

  const recentLocationsComponent =
    recentLocations && recentLocations.length > 0 ? (
      <FlexCol>
        <Header>{LABELS.recentLocations}</Header>
        <LocLinks
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
      {results && results.length > 0 ? (
        <LocLinks results={results} onClickSuggestion={onClickSuggestion} />
      ) : (
        <div className={cn("w-full", HEADER_PADDING)}>
          <Text>{LABELS.noLocationsFound}</Text>
        </div>
      )}
    </FlexCol>
  );

  return (
    <div className="input-suggestions-container">
      {recentLocationsComponent}
      {locationResultsComponent}
    </div>
  );
};
