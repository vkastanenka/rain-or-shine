import { Link } from "@tanstack/react-router";
import { FlexCol, Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LABELS } from "./constants";
import {
  type LocationSearchSuggestionsProps,
  type LocationSearchSuggestionLinkProps,
} from "./types";
import { cn } from "@/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("p-4", "w-full", className)}>
    <Text>{children}</Text>
  </div>
);

const LocationResultsHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("p-4", "w-full", className)}>
    <Text>{children}</Text>
  </div>
);

export const LocLinks = ({
  title,
  results,
  onClickSuggestion,
}: LocationSearchSuggestionLinkProps) => {
  return (
    <FlexCol>
      <Title className="bg-neutral">{title}</Title>
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
    </FlexCol>
  );
};

export const LocationSearchSuggestions = ({
  isLoading,
  results,
  recentLocations,
  listIsOpen,
  onClickSuggestion,
}: LocationSearchSuggestionsProps) => {
  if (!listIsOpen) return null;

  const recentLocationsComponent =
    recentLocations && recentLocations.length > 0 ? (
      <LocLinks
        title={LABELS.recentLocations}
        results={recentLocations}
        onClickSuggestion={onClickSuggestion}
      />
    ) : null;

  const locationResultsComponent = isLoading ? (
    <Title>{LABELS.isLoadingMessage}</Title>
  ) : (
    <LocLinks
      title={LABELS.locations}
      results={results}
      onClickSuggestion={onClickSuggestion}
    />
  );

  return (
    <div className="input-suggestions-container">
      {recentLocationsComponent}
      {locationResultsComponent}
    </div>
  );
};
