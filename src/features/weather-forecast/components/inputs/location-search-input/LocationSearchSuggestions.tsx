import { Link } from "@tanstack/react-router";
import { FlexCol, Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LABELS } from "./constants";
import {
  type LocationSearchSuggestionsProps,
  type ValidLocation,
} from "./types";

const IsLoadingMessage = () => (
  <div className="p-4">
    <Text>{LABELS.isLoadingMessage}</Text>
  </div>
);

export const LocLinks = ({
  results,
  onNavigate,
}: {
  results: ValidLocation[];
  onNavigate: () => void;
}) => {
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
          onClick={onNavigate}
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
  listIsOpen,
  onNavigate,
}: LocationSearchSuggestionsProps) => {
  if (!listIsOpen) return null;

  const renderedComponent = isLoading ? (
    <IsLoadingMessage />
  ) : (
    <LocLinks results={results} onNavigate={onNavigate} />
  );

  return (
    <div className="input-suggestions-container">
      <FlexCol>{renderedComponent}</FlexCol>
    </div>
  );
};
