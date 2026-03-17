import { LocationSearchSuggestions } from "./LocationSearchSuggestions";
import { LocationSearchInput } from "./LocationSearchInput";
import { LocationSearchContainer } from "./LocationSearchContainer";
import { LocationSearchProvider } from "./context";
import type { LocationSearchProps } from "./types";

export const LocationSearch = (_: LocationSearchProps) => {
  return (
    <LocationSearchProvider>
      <LocationSearchContainer>
        <LocationSearchInput />
        <LocationSearchSuggestions />
      </LocationSearchContainer>
    </LocationSearchProvider>
  );
};
