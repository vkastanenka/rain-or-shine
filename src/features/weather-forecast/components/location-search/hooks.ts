import { useEffect } from "react";
import { STORAGE_KEY_MAP, useStorage, type Location } from "@/services";

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
  const [recentLocations] = useStorage(STORAGE_KEY_MAP.recentLocations);
  const recentLocationsLength =
    recentLocations && recentLocations.length > 0 ? recentLocations.length : 0;

  useEffect(() => {
    if (
      isFocused &&
      ((query.length > 0 && debouncedQuery.length > 0) ||
        recentLocationsLength > 0)
    ) {
      openFn();
      return;
    }
    closeFn();
  }, [isFocused, query, debouncedQuery, recentLocationsLength]);
};
