import { useRef } from "react";
import { TextInputSuggestionsContainer } from "@/components";
import { useSearchState } from "../hooks";
import { RecentLocations } from "./RecentLocations";
import { LocationResults } from "./LocationResults";

export const LocationSuggestions = () => {
  const { isOpen } = useSearchState();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <TextInputSuggestionsContainer ref={containerRef} isOpen={isOpen}>
      <RecentLocations />
      <LocationResults containerRef={containerRef} />
    </TextInputSuggestionsContainer>
  );
};
