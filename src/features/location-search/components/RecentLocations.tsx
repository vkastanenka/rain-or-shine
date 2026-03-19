import { FaTimes } from "react-icons/fa";
import { Button, FlexCol } from "@/components";
import { LABELS } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import { LocationSuggestionsHeader } from "./LocationSuggestionsHeader";
import { LocationLink } from "./LocationLink";

export const RecentLocations = () => {
  const { recentLocations, hasRecentLocations } = useSearchState();
  const { setRecentLocations } = useSearchActions();

  if (!recentLocations || !hasRecentLocations) {
    return null;
  }

  return (
    <FlexCol>
      <LocationSuggestionsHeader label={LABELS.recentLocations}>
        <Button shape="circle" onClick={() => setRecentLocations([])}>
          <FaTimes />
        </Button>
      </LocationSuggestionsHeader>
      {recentLocations.map((location) => (
        <LocationLink key={location.id} location={location} />
      ))}
    </FlexCol>
  );
};
