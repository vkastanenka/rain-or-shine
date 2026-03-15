import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useDebounce } from "@/hooks";
import { TextInput, FlexCol, Text } from "@/components";
import { formatWeatherUrlPath } from "@/features/weather-forecast/utils";
import { useGetLocationsByName } from "@/services";
import { cn } from "@/utils";
import { FORECAST_PERIOD_MAP } from "@/features/weather-forecast/constants";
import { LABELS } from "./constants";
import { type LocationSearchInputProps } from "./types";
import { locationHasValidPath } from "./utils";

export const LocationSearchInput = ({
  size,
  className,
}: LocationSearchInputProps) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);

  const { data, isLoading } = useGetLocationsByName({ name: debouncedQuery });
  const results = data?.results || [];

  return (
    <div className={cn("relative", "w-full", className)}>
      <TextInput
        type="search"
        size={size ?? { base: "lg", md: "xl" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={LABELS.placeholder}
        className="w-full"
        onClear={() => setQuery("")}
      />

      {/* Suggestion Dropdown */}
      {query.length >= 2 && (results.length > 0 || isLoading) && (
        <div className="absolute top-full left-0 w-full mt-2 bg-base-100 border border-base-300 rounded-lg shadow-xl z-50 overflow-hidden">
          <FlexCol>
            {isLoading ? (
              <div className="p-4">
                <Text>Searching...</Text>
              </div>
            ) : (
              results.filter(locationHasValidPath).map((loc) => (
                <Link
                  key={loc.id}
                  to={formatWeatherUrlPath(
                    loc.country_code,
                    loc.admin1,
                    loc.name,
                    FORECAST_PERIOD_MAP.current,
                  )}
                  className="p-4 hover:bg-base-200 transition-colors text-left border-b border-base-200 last:border-0 w-full"
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
      )}
    </div>
  );
};
