import { LocationSearchProvider } from "./LocationSearchProvider";
import {
  LocationSearchContainer,
  LocationSearchInput,
  LocationSuggestions,
} from "./components";
import type { LocationSearchProps } from "./types";

export const LocationSearch = (_: LocationSearchProps) => {
  return (
    <LocationSearchProvider>
      <LocationSearchContainer>
        <LocationSearchInput />
        <LocationSuggestions />
      </LocationSearchContainer>
    </LocationSearchProvider>
  );
};
