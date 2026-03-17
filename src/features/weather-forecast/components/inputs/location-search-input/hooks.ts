import { useEffect, useState } from "react";
import { type Location } from "@/services";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";
import { getRecentLocations } from "@/features/weather-forecast/utils";

// TODO: Move to root
export const useGetRecentLocations = (listIsOpen: boolean) => {
  const [locations, setLocations] = useState<ValidWeatherPathLocation[]>([]);

  const refresh = () => {
    setLocations(getRecentLocations());
  };

  useEffect(() => {
    if (listIsOpen) {
      refresh();
    }
  }, [listIsOpen]);

  return { locations, refresh };
};

// TODO: Determine better implementation
export const useIncreaseSearchCount = ({
  debouncedQuery,
  isLoading,
  locationResults,
  searchCount,
  increaseSearchCountFn,
  resetSearchCountFn,
}: {
  debouncedQuery: string;
  isLoading: boolean;
  locationResults?: Location[];
  searchCount: number;
  increaseSearchCountFn: () => void;
  resetSearchCountFn: () => void;
}) => {
  useEffect(() => {
    if (!isLoading && locationResults?.length === 0 && searchCount < 100) {
      increaseSearchCountFn();
    }
  }, [locationResults, isLoading, searchCount]);

  useEffect(() => {
    resetSearchCountFn();
  }, [debouncedQuery]);
};

export const useShowSuggestions = ({
  query,
  debouncedQuery,
  isFocused,
  openFn,
  closeFn,
}: {
  query: string;
  debouncedQuery: string;
  isFocused: boolean;
  openFn: () => void;
  closeFn: () => void;
}) => {
  const recentLocations = getRecentLocations();
  useEffect(() => {
    if (
      isFocused &&
      ((query.length > 0 && debouncedQuery.length > 0) ||
        recentLocations.length > 0)
    ) {
      openFn();
      return;
    }
    closeFn();
  }, [isFocused, query, debouncedQuery, recentLocations.length]);
};
