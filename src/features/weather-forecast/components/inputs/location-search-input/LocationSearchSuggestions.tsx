import { Link } from "@tanstack/react-router";
import { FlexCol, Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LABELS } from "./constants";
import { type LocationSearchSuggestionsProps } from "./types";

export const LocationSearchSuggestions = ({
  isLoading,
  results,
  listIsOpen,
  onNavigate,
}: LocationSearchSuggestionsProps) => {
  if (!listIsOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full mt-2 bg-base-100 border border-base-300 rounded-lg shadow-xl z-50 overflow-hidden">
      <FlexCol>
        {isLoading ? (
          <div className="p-4">
            <Text>{LABELS.isLoadingMessage}</Text>
          </div>
        ) : (
          results.map((loc) => (
            <Link
              key={loc.id}
              to={formatWeatherUrlPath(
                loc.country_code,
                loc.admin1,
                loc.name,
                FORECAST_PERIOD_MAP.current,
              )}
              className="p-4 hover:bg-base-200 transition-colors text-left border-b border-base-200 last:border-0 w-full"
              onClick={onNavigate}
            >
              <Text type="large" className="font-medium">
                {loc.name}
              </Text>
              <Text className="opacity-70">
                {loc.admin1}, {loc.country}
              </Text>
            </Link>
          ))
        )}
      </FlexCol>
    </div>
  );
};
