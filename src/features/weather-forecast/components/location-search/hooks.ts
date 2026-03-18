import { useContext, useCallback, useMemo, useState } from "react";
import { useDebounce } from "@/hooks";
import {
  STORAGE_KEY_MAP,
  useStorage,
  useGetLocalityByCoords,
  useGetLocationsByName,
} from "@/services";
import { ERRORS, QUERY_COUNT_MAP, QUERY_SCOPE_MAP } from "./constants";
import { StateContext, ActionsContext } from "./context";
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

  /**
   * Recent locations state
   */

  const [recentLocations] = useStorage(STORAGE_KEY_MAP.recentLocations);
  const recentLocationsLength = recentLocations?.length ?? 0;

  /**
   * Suggestion list is open
   */

  const listIsOpen =
    isFocused && (query.length > 0 || recentLocationsLength > 0);

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
      results: data?.results ?? [],
      isLoading,

      // Recent locations state
      recentLocations,
      recentLocationsLength,

      // List state
      listIsOpen,
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
      data?.results,
      isLoading,

      // Recent locations state
      recentLocations,
      recentLocationsLength,

      // List state
      listIsOpen,
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
    }),
    [
      // Utility actions
      handleQueryCountReset,
      handleQueryCountIncrease,
      handleQueryChange,
      handleBlur,
      handleClear,
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
