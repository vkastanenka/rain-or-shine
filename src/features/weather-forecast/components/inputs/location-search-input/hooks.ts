import { useEffect, useMemo, useState } from "react";
import { type Location } from "@/services";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";
import { locationHasValidPath } from "./utils";
import { getRecentLocations } from "@/features/weather-forecast/utils";

export const useGetRecentLocations = (listIsOpen: boolean) => {
  // 1. Create a local state to hold the locations
  const [locations, setLocations] = useState<ValidWeatherPathLocation[]>([]);

  // 2. Create a function to pull fresh data
  const refresh = () => {
    setLocations(getRecentLocations());
  };

  // 3. Refresh when the list opens
  useEffect(() => {
    if (listIsOpen) {
      refresh();
    }
  }, [listIsOpen]);

  return { locations, refresh };
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
    if (
      isFocused &&
      (debouncedQuery.length > 0 || recentLocations.length > 0)
    ) {
      openFn();
      return;
    }
    closeFn();
  }, [debouncedQuery]);
};
