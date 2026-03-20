import { FaTimes } from "react-icons/fa";
import { Button, FlexCol, TextInputSuggestionsHeader } from "@/components";
import { LABELS } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import { LocationLink } from "./LocationLink";

export const RecentLocations = () => {
  const { recentLocations, hasRecentLocations } = useSearchState();
  const { handleRemoveRecentLocations } = useSearchActions();

  if (!recentLocations || !hasRecentLocations) {
    return null;
  }

  return (
    <FlexCol>
      <TextInputSuggestionsHeader label={LABELS.recentLocations}>
        <Button
          size={{ base: "xs", sm: "md" }}
          shape="circle"
          onClick={handleRemoveRecentLocations}
        >
          <FaTimes />
        </Button>
      </TextInputSuggestionsHeader>
      {recentLocations.map((location) => (
        <LocationLink key={location.id} location={location} />
      ))}
    </FlexCol>
  );
};
