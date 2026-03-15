import { useState, useRef } from "react";
import { useDebounce } from "@/hooks";
import { TextInput } from "@/components";
import { useGetLocationsByName } from "@/services";
import { cn } from "@/utils";
import { LABELS } from "./constants";
import {
  useGetRecentLocations,
  useShowSuggestionsOnSearch,
  useFilterResults,
} from "./hooks";
import { type LocationSearchInputProps } from "./types";
import { onInputFocus } from "./utils";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { LocationSearchSuggestions } from "./LocationSearchSuggestions";
import { saveRecentLocation } from "@/features/weather-forecast/utils";

export const LocationSearchInput = ({
  size,
  className,
}: LocationSearchInputProps) => {
  const [query, setQuery] = useState("");
  const [listIsOpen, setListIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(query, 400);
  const { data, isLoading } = useGetLocationsByName({ name: debouncedQuery });
  const results = data?.results || [];

  const filteredResults = useFilterResults(results);
  const recentLocations = useGetRecentLocations(listIsOpen);

  useOnClickOutside(containerRef, () => setListIsOpen(false));

  useShowSuggestionsOnSearch(filteredResults, isLoading, debouncedQuery, () => {
    setListIsOpen(true);
  });

  return (
    <div ref={containerRef} className={cn("relative", "w-full", className)}>
      <TextInput
        type="search"
        size={size ?? { base: "lg", md: "xl" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={LABELS.placeholder}
        className="w-full"
        onClear={() => {
          setQuery("");
          setListIsOpen(false);
        }}
        onFocus={() =>
          onInputFocus(query, filteredResults, isLoading, () => {
            setListIsOpen(true);
          })
        }
      />
      <LocationSearchSuggestions
        isLoading={isLoading}
        results={filteredResults}
        recentLocations={recentLocations}
        listIsOpen={listIsOpen}
        query={query}
        onClickSuggestion={(loc) => {
          saveRecentLocation(loc);
          setListIsOpen(false);
        }}
      />
    </div>
  );
};
