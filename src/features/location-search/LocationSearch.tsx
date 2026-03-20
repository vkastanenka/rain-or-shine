import { LocationSearchProvider } from "./LocationSearchProvider";
import {
  LocationSearchContainer,
  LocationSearchInput,
  LocationSuggestions,
} from "./components";
import type { LocationSearchProps } from "./types";

export const LocationSearch = ({ size, className }: LocationSearchProps) => {
  return (
    <LocationSearchProvider size={size} className={className}>
      <LocationSearchContainer>
        <LocationSearchInput />
        <LocationSuggestions />
      </LocationSearchContainer>
    </LocationSearchProvider>
  );
};
