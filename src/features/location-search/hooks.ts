import { useContext, useCallback, useMemo, useState } from "react";
import { useDebounce } from "@/hooks";
import {
  STORAGE_KEY_MAP,
  useStorage,
  useGetLocalityByCoords,
  useGetLocationsByName,
  type ValidWeatherPathLocation,
} from "@/services";
import { upsertToFront } from "@/utils";
import { ERRORS, QUERY_COUNT_MAP, QUERY_SCOPE_MAP } from "./constants";
import { StateContext, ActionsContext } from "./LocationSearchProvider";
import type { LocationSearchProps, QueryScopeMapValue } from "./types";

export const useLocationSearchContext = (props: LocationSearchProps) => {
  /**
   * Input state
   */

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [isFocused, setIsFocused] = useState(false);

  /**
   * Query state
   */

  const { data: locality } = useGetLocalityByCoords();
  const [queryCount, setQueryCount] = useState(QUERY_COUNT_MAP.default);
  const [queryScope, setQueryScope] = useState<QueryScopeMapValue>(
    QUERY_SCOPE_MAP.local,
  );

  const { data, isLoading } = useGetLocationsByName({
    name: debouncedQuery,
    count: queryCount,
    countryCode: queryScope === "local" ? locality?.countryCode : undefined,
  });
  const locations = data?.results ?? [];
  const hasLocations = locations.length > 0;
  const isSettled = !isLoading && query === debouncedQuery;
  const isEmpty = isSettled && !hasLocations;

  /**
   * Recent locations
   */

  const {
    data: recentLocations,
    set: setRecentLocations,
    remove: removeRecentLocations,
  } = useStorage(STORAGE_KEY_MAP.recentLocations);
  const hasRecentLocations = recentLocations && recentLocations?.length > 0;

  /**
   * Suggestion list is open
   */

  const isOpen = !!(isFocused && (query.length > 0 || hasRecentLocations));

  /**
   * Utility functions
   */

  const handleQueryCountReset = useCallback(() => {
    if (queryCount !== QUERY_COUNT_MAP.default) {
      setQueryCount(QUERY_COUNT_MAP.default);
    }
  }, [queryCount]);

  const handleQueryCountIncrease = useCallback(() => {
    if (queryCount !== QUERY_COUNT_MAP.max) {
      setQueryCount(QUERY_COUNT_MAP.max);
    }
  }, [queryCount]);

  const handleQueryChange = useCallback(
    (val: string) => {
      setQuery(val);
      handleQueryCountReset();
    },
    [handleQueryCountReset],
  );

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    handleQueryCountReset();
  }, [handleQueryCountReset]);

  const handleClear = useCallback(() => {
    setQuery("");
    handleBlur();
  }, [handleBlur]);

  const handleSelectLocation = useCallback(
    (location: ValidWeatherPathLocation) => {
      const newLocations = upsertToFront(location, recentLocations ?? [], {
        filterKey: "id",
        max: 2,
      });
      setRecentLocations(newLocations);
      handleClear();
    },
    [setRecentLocations, handleClear],
  );

  const handleRemoveRecentLocations = useCallback(() => {
    removeRecentLocations();
  }, [removeRecentLocations]);

  /**
   * State value
   */

  const state = useMemo(
    () => ({
      // Props
      size: props.size,
      className: props.className,

      // Input state
      query,
      debouncedQuery,
      isFocused,

      // Query state
      locality,
      queryCount,
      queryScope,

      // Query
      locations,
      hasLocations,
      isLoading,
      isSettled,
      isEmpty,

      // Recent locations state
      recentLocations,
      hasRecentLocations,

      // UI state
      isOpen,
    }),
    [
      // Props
      props.size,
      props.className,

      // Input state
      query,
      debouncedQuery,
      isFocused,

      // Query state
      locality,
      queryCount,
      queryScope,

      // Query
      locations,
      hasLocations,
      isLoading,
      isSettled,
      isEmpty,

      // Recent locations state
      recentLocations,
      hasRecentLocations,

      // UI state
      isOpen,
    ],
  );

  /**
   * Actions value
   */

  const actions = useMemo(
    () => ({
      // Input actions
      setQuery,
      setIsFocused,

      // Query actions
      setQueryScope,

      // Utility actions
      handleQueryCountReset,
      handleQueryCountIncrease,
      handleQueryChange,
      handleBlur,
      handleClear,
      handleSelectLocation,
      handleRemoveRecentLocations,
    }),
    [
      // Utility actions
      handleQueryCountReset,
      handleQueryCountIncrease,
      handleQueryChange,
      handleBlur,
      handleClear,
      handleSelectLocation,
      handleRemoveRecentLocations,
    ],
  );

  return { state, actions };
};

export const useSearchState = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error(ERRORS.stateProviderHookMissingContext);
  return context;
};

export const useSearchActions = () => {
  const context = useContext(ActionsContext);
  if (!context) throw new Error(ERRORS.actionProviderHookMissingContext);
  return context;
};
