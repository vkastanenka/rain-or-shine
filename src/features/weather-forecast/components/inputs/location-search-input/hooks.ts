import { useEffect, useMemo } from "react";
import { type Location } from "@/services";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";
import { locationHasValidPath } from "./utils";
import { getRecentLocations } from "@/features/weather-forecast/utils";

export const useGetRecentLocations = (
  listIsOpen: boolean,
): ValidWeatherPathLocation[] | undefined => {
  return useMemo(() => getRecentLocations(), [listIsOpen]);
};

export const useFilterResults = (
  results: Location[],
): ValidWeatherPathLocation[] => {
  return useMemo(() => {
    return results.filter(locationHasValidPath);
  }, [results]);
};

export const useShowSuggestionsOnSearch = (
  isFocused: boolean,
  debouncedQuery: string,
  openFn: () => void,
  closeFn: () => void,
) => {
  const recentLocations = getRecentLocations();
  useEffect(() => {
    if (isFocused && (debouncedQuery.length > 0 || recentLocations.length > 0)) {
      openFn();
      return;
    }
    closeFn();
  }, [debouncedQuery]);
};
