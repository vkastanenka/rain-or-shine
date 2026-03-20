import { FaArrowRight } from "react-icons/fa";
import {
  FlexCol,
  TextInputSuggestionsButton,
  TextInputSuggestionsHeader,
  TextInputSuggestionsMessage,
  VirtualList,
} from "@/components";
import { LABELS, QUERY_COUNT_MAP } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import type { LocationResultsProps } from "../types";
import { LocationLink } from "./LocationLink";
import { ScopeTabList } from "./ScopeTabList";

export const LocationResults = ({ containerRef }: LocationResultsProps) => {
  const {
    showLoading,
    hasLocations,
    locations,
    queryCount,
    isSettled,
    isEmpty,
  } = useSearchState();
  const { handleQueryCountIncrease } = useSearchActions();

  const canIncrease = queryCount === QUERY_COUNT_MAP.default;

  return (
    <FlexCol>
      <TextInputSuggestionsHeader label={LABELS.locations} sticky>
        <ScopeTabList />
      </TextInputSuggestionsHeader>
      {hasLocations ? (
        <VirtualList
          items={locations}
          estimateSize={84}
          containerRef={containerRef}
          renderItem={(loc) => <LocationLink key={loc.id} location={loc} />}
        />
      ) : (
        <TextInputSuggestionsMessage
          label={
            showLoading
              ? LABELS.isLoadingMessage
              : isEmpty
                ? LABELS.noLocationsFound
                : LABELS.searchToFind
          }
        />
      )}
      {isSettled && canIncrease && (
        <TextInputSuggestionsButton onClick={handleQueryCountIncrease}>
          {LABELS.expandSearchBreadth}
          <FaArrowRight />
        </TextInputSuggestionsButton>
      )}
    </FlexCol>
  );
};
