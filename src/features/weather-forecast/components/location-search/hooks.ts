import { useEffect } from "react";
import { STORAGE_KEY_MAP, useStorage } from "@/services";

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
