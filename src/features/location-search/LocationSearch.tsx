import { LocationSearchProvider } from "./LocationSearchProvider";
import {
  LocationSearchContainer,
  LocationSearchInput,
  LocationSuggestions,
} from "./components";
import type { LocationSearchProps } from "./types";

export const LocationSearch = ({
  size,
  className,
  showRecentLocations = true,
}: LocationSearchProps) => {
  return (
    <LocationSearchProvider
      size={size}
      className={className}
      showRecentLocations={showRecentLocations}
    >
      <LocationSearchContainer>
        <LocationSearchInput />
        <LocationSuggestions />
      </LocationSearchContainer>
    </LocationSearchProvider>
  );
};
