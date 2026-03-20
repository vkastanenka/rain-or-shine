import { AnimateExpand } from "@/components";
import { useSearchActions, useSearchState } from "../hooks";
import { RecentLocations } from "./RecentLocations";
import { LocationResults } from "./LocationResults";

export const LocationSuggestions = () => {
  const { isOpen, containerRef } = useSearchState();
  const { handleResetScroll } = useSearchActions();

  return (
    <AnimateExpand
      ref={containerRef}
      isOpen={isOpen}
      className="text-input-suggestions-container"
      onClose={() => handleResetScroll("instant")}
    >
      <RecentLocations />
      <LocationResults containerRef={containerRef} />
    </AnimateExpand>
  );
};
