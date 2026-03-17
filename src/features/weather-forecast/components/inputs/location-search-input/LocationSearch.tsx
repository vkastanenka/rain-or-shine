import { LocationSearchSuggestions } from "./LocationSearchSuggestions";
import { LocationSearchInput } from "./LocationSearchInput";
import { LocationSearchContainer } from "./LocationSearchContainer";
import { LocationSearchProvider } from "./context";
import type { LocationSearchInputProps } from "./types";

export const LocationSearch = (_: LocationSearchInputProps) => {
  return (
    <LocationSearchProvider>
      <LocationSearchContainer>
        <LocationSearchInput />
        <LocationSearchSuggestions />
      </LocationSearchContainer>
    </LocationSearchProvider>
  );
};
