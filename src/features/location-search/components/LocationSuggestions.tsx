import { useRef } from "react";
import { AnimateExpand } from "@/components";
import { useSearchState } from "../hooks";
import { RecentLocations } from "./RecentLocations";
import { LocationResults } from "./LocationResults";

export const LocationSuggestions = () => {
  const { isOpen } = useSearchState();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <AnimateExpand
      ref={containerRef}
      isOpen={isOpen}
      className="input-suggestions-container"
    >
      <RecentLocations />
      <LocationResults containerRef={containerRef} />
    </AnimateExpand>
  );
};
