import { createContext, useContext, useState } from "react";
import { useDebounce } from "@/hooks";
import { useGetLocalityByCoords, useGetLocationsByName } from "@/services";
import { useShowSuggestions } from "./hooks";
import type { LocationSearchProps } from "./types";

const LocationSearchContext = createContext<ReturnType<
  typeof useLocationSearchContext
> | null>(null);

const useLocationSearchContext = (props: LocationSearchProps) => {
  /**
   * Input state
   */

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [isFocused, setIsFocused] = useState(false);
  const [listIsOpen, setListIsOpen] = useState(false);

  /**
   * Query state
   */

  const defaultSearchCount = 20;
  const maxSearchCount = 100;
  const { data: locality } = useGetLocalityByCoords();
  const countryCode = locality?.countryCode;
  const [searchCount, setSearchCount] = useState(defaultSearchCount);
  const [scopeIsGlobal, setScopeIsGlobal] = useState(false);

  const { data, isLoading } = useGetLocationsByName({
    name: debouncedQuery,
    count: searchCount,
    ...(countryCode && !scopeIsGlobal ? { countryCode } : {}),
  });

  /**
   * Show suggestions side effect
   */

  useShowSuggestions({
    query,
    debouncedQuery,
    isFocused,
    openFn: () => setListIsOpen(true),
    closeFn: () => setListIsOpen(false),
  });

  return {
    props,
    query,
    setQuery,
    debouncedQuery,
    isFocused,
    setIsFocused,
    listIsOpen,
    setListIsOpen,
    scopeIsGlobal,
    setScopeIsGlobal,
    results: data?.results,
    isLoading,
    countryCode,
    defaultSearchCount,
    maxSearchCount,
    searchCount,
    setSearchCount,
  };
};

export const LocationSearchProvider = ({
  children,
  ...props
}: LocationSearchProps & { children: React.ReactNode }) => {
  const value = useLocationSearchContext(props);
  return (
    <LocationSearchContext.Provider value={value}>
      {children}
    </LocationSearchContext.Provider>
  );
};

export const useLocationSearch = () => {
  const context = useContext(LocationSearchContext);
  if (!context)
    throw new Error(
      "useLocationSearch must be used within LocationSearchProvider",
    );
  return context;
};
