import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import {
  AnimateExpand,
  Button,
  FlexCol,
  TextInputSuggestionsHeader,
} from "@/components";
import { LABELS } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import { LocationLink } from "./LocationLink";

export const RecentLocations = () => {
  const { recentLocations, hasRecentLocations } = useSearchState();
  const { handleRemoveRecentLocations } = useSearchActions();

  const isOpen = !!(recentLocations && hasRecentLocations);

  return (
    <AnimateExpand isOpen={isOpen}>
      <FlexCol className="relative bg-base-100 z-50">
        <TextInputSuggestionsHeader label={LABELS.recentLocations}>
          <Button
            size={{ base: "xs", sm: "md" }}
            shape="circle"
            onClick={handleRemoveRecentLocations}
          >
            <FaTimes />
          </Button>
        </TextInputSuggestionsHeader>
        {isOpen &&
          recentLocations
            .slice(0, 3)
            .map((location) => (
              <LocationLink key={location.id} location={location} />
            ))}
      </FlexCol>
    </AnimateExpand>
  );
};
