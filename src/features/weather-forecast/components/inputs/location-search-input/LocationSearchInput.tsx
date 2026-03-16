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
  useShowSuggestions,
  useFilterResults,
  useIncreaseSearchCount,
} from "./hooks";
import { type LocationSearchInputProps } from "./types";

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
   * TODO: Ensure it resets / see if this is what the best pattern is
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
   * TODO: Move to context?
   */

  const { locations: recentLocations, refresh: refreshRecentLocations } =
    useGetRecentLocations(listIsOpen);

  /**
   * Show suggestion management
   */

  useShowSuggestions({
    query,
    debouncedQuery,
    isFocused,
    openFn: () => setListIsOpen(true),
    closeFn: () => setListIsOpen(false),
  });

  /**
   * Stop focus when clicking outside of the container
   */

  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef, () => setIsFocused(false));

  return (
    <div ref={containerRef} className={cn("relative", "w-full", className)}>
      <TextInput
        type="search"
        className="w-full"
        size={size ?? { base: "lg", md: "xl" }}
        value={query}
        placeholder={LABELS.placeholder}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onClear={() => setQuery("")}
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
