import { useState, useRef } from "react";
import { useDebounce } from "@/hooks";
import { TextInput } from "@/components";
import { saveRecentLocation } from "@/features/weather-forecast/utils";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useGetLocalityByCoords, useGetLocationsByName } from "@/services";
import { cn } from "@/utils";
import { LocationSearchSuggestions } from "./LocationSearchSuggestions";
import { LABELS } from "./constants";
import {
  useGetRecentLocations,
  useShowSuggestionsOnSearch,
  useFilterResults,
  useIncreaseSearchCount,
} from "./hooks";
import { type LocationSearchInputProps } from "./types";
import { onInputFocus } from "./utils";

export const LocationSearchInput = ({
  size,
  className,
}: LocationSearchInputProps) => {
  /**
   * Display state
   */

  const [isFocused, setIsFocused] = useState(false);
  const [listIsOpen, setListIsOpen] = useState(false);

  /**
   * Get user's current country code
   */

  const { data: locality } = useGetLocalityByCoords();
  const currentCountryCode = locality?.countryCode;

  /**
   * Get locations from search
   */

  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [searchCount, setSearchCount] = useState(20);
  const [scopeIsGlobal, setScopeIsGlobal] = useState(false);

  const { data, isLoading } = useGetLocationsByName({
    name: debouncedQuery,
    count: searchCount,
    ...(currentCountryCode && !scopeIsGlobal
      ? { countryCode: currentCountryCode }
      : {}),
  });

  const results = data?.results || [];
  const filteredResults = useFilterResults(results);

  /**
   * Increase search count if no initial results
   */

  useIncreaseSearchCount({
    debouncedQuery,
    isLoading,
    locationResults: data?.results,
    searchCount,
    increaseSearchCountFn: () =>
      setSearchCount((prev) => (prev === 20 ? 50 : 100)),
    resetSearchCountFn: () => setSearchCount(20),
  });

  /**
   * Get recent locations and remove logic
   */

  const { locations: recentLocations, refresh: refreshRecentLocations } =
    useGetRecentLocations(listIsOpen);

  /**
   * Show suggestions when searching
   */

  useShowSuggestionsOnSearch({
    isFocused,
    debouncedQuery,
    openFn: () => setListIsOpen(true),
    closeFn: () => setListIsOpen(false),
  });

  /**
   * Close suggestions if input no longer focused
   */

  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef, () => setListIsOpen(false));

  return (
    <div ref={containerRef} className={cn("relative", "w-full", className)}>
      <TextInput
        type="search"
        className="w-full"
        size={size ?? { base: "lg", md: "xl" }}
        value={query}
        placeholder={LABELS.placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onClear={() => {
          setQuery("");
          setListIsOpen(false);
        }}
        onFocus={() => {
          setIsFocused(true);
          onInputFocus(query, filteredResults, isLoading, () => {
            setListIsOpen(true);
          });
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <LocationSearchSuggestions
        debouncedQuery={debouncedQuery}
        isLoading={isLoading}
        results={filteredResults}
        recentLocations={recentLocations}
        listIsOpen={listIsOpen}
        query={query}
        onClickSuggestion={(loc) => {
          saveRecentLocation(loc);
          setListIsOpen(false);
        }}
        currentCountryCode={currentCountryCode}
        scopeIsGlobal={scopeIsGlobal}
        toggleScopeIsGlobal={() => {
          setScopeIsGlobal((prevState) => !prevState);
        }}
        onDeleteRecent={refreshRecentLocations}
      />
    </div>
  );
};
