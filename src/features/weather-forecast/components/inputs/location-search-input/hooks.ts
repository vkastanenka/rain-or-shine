import { useEffect, useMemo } from "react";
import { type Location } from "@/services";
import { type ValidLocation } from "./types";
import { locationHasValidPath } from "./utils";

export const useFilterResults = (results: Location[]): ValidLocation[] => {
  const filteredResults = useMemo(() => {
    return results.filter(locationHasValidPath);
  }, [results]);
  return filteredResults;
};

export const useShowSuggestionsOnSearch = (
  results: Location[],
  isLoading: boolean,
  debouncedQuery: string,
  callbackFn: () => void,
) => {
  useEffect(() => {
    const hasResults = results.length > 0 || isLoading;
    if (debouncedQuery.length >= 2 && hasResults) {
      callbackFn();
    }
  }, [debouncedQuery, results.length, isLoading]);
};
