import { useContext, useCallback, useMemo, useState, useRef } from "react";
import { useDebounce } from "@/hooks";
import {
  STORAGE_KEY_MAP,
  useStorage,
  useGetLocalityByCoords,
  useGetLocationsByName,
  type ValidWeatherPathLocation,
} from "@/services";
import { animateScroll, upsertToFront } from "@/utils";
import {
  ERRORS,
  MIN_ACTIVE_QUERY_LENGTH,
  QUERY_COUNT_MAP,
  QUERY_SCOPE_MAP,
} from "./constants";
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
    locality?.countryCode ? QUERY_SCOPE_MAP.local : QUERY_SCOPE_MAP.global,
  );

  const { data, isLoading, isFetching } = useGetLocationsByName(
    {
      name: debouncedQuery,
      count: queryCount,
      countryCode: queryScope === "local" ? locality?.countryCode : undefined,
    },
    {
      enabled:
        query === debouncedQuery &&
        debouncedQuery.trim().length >= MIN_ACTIVE_QUERY_LENGTH,
    },
  );

  const locations = useMemo(() => {
    const currentResults = data?.results ?? [];

    if (debouncedQuery && query.length === 0) {
      return currentResults;
    }

    if (query.length < MIN_ACTIVE_QUERY_LENGTH || query !== debouncedQuery) {
      return [];
    }
    return data?.results ?? [];
  }, [query, debouncedQuery, data]);

  const hasLocations = locations.length > 0;
  const isSettled = !isLoading && query === debouncedQuery;
  const isEmpty = isSettled && !hasLocations;
  const showLoading = isLoading || (isFetching && query === debouncedQuery);

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

  const isOpen = isFocused;

  /**
   * Container
   */

  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Utility functions
   */

  const handleResetScroll = useCallback(
    (behavior: "instant" | "smooth" = "smooth") => {
      if (containerRef.current) {
        if (behavior === "instant") {
          containerRef.current.scrollTop = 0;
          return;
        }

        animateScroll(containerRef.current, 400);
      }
    },
    [containerRef],
  );

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
      handleQueryCountReset();
      setQuery(val);
    },
    [handleQueryCountReset],
  );

  const handleQueryScopeChange = useCallback(
    (scope: QueryScopeMapValue) => {
      handleQueryCountReset();
      setQueryScope(scope);
    },
    [handleQueryCountReset],
  );

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    handleQueryCountReset();
  }, [handleQueryCountReset]);

  const handleClear = useCallback(() => {
    setQuery("");
    handleResetScroll();
  }, [handleResetScroll]);

  const handleSelectLocation = useCallback(
    (location: ValidWeatherPathLocation) => {
      const newLocations = upsertToFront(location, recentLocations ?? [], {
        filterKey: "id",
        max: 2,
      });
      setRecentLocations(newLocations);
      handleClear();
    },
    [recentLocations, setRecentLocations, handleClear],
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

      // Container
      containerRef,

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
      showLoading,

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

      // Container
      containerRef,

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
      showLoading,

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

      // Utility actions
      handleResetScroll,
      handleQueryCountReset,
      handleQueryCountIncrease,
      handleQueryChange,
      handleQueryScopeChange,
      handleBlur,
      handleClear,
      handleSelectLocation,
      handleRemoveRecentLocations,
    }),
    [
      // Utility actions
      handleResetScroll,
      handleQueryCountReset,
      handleQueryCountIncrease,
      handleQueryChange,
      handleQueryScopeChange,
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
