import { FaArrowRight } from "react-icons/fa";
import { Button, FlexCol, Text, VirtualList } from "@/components";
import { cn } from "@/utils";
import { LABELS, LIST_ITEM_PADDING_MAP, QUERY_COUNT_MAP } from "../constants";
import { useSearchActions, useSearchState } from "../hooks";
import type { LocationResultsProps } from "../types";
import { LocationSuggestionsHeader } from "./LocationSuggestionsHeader";
import { LocationLink } from "./LocationLink";
import { ScopeTabList } from "./ScopeTabList";

const LocationResultsStatus = () => {
  const { queryCount, isEmpty } = useSearchState();
  const { handleQueryCountIncrease } = useSearchActions();

  const canIncrease = queryCount === QUERY_COUNT_MAP.default;

  return (
    <div className="w-full">
      <div className={LIST_ITEM_PADDING_MAP.lg}>
        <Text>{isEmpty ? LABELS.noLocationsFound : LABELS.searchToFind}</Text>
      </div>
      {isEmpty && canIncrease && (
        <Button
          color="neutral"
          onClick={handleQueryCountIncrease}
          className={cn(LIST_ITEM_PADDING_MAP.lg, "w-full", "rounded-none")}
        >
          {LABELS.expandSearchBreadth}
          <FaArrowRight />
        </Button>
      )}
    </div>
  );
};

export const LocationResults = ({ containerRef }: LocationResultsProps) => {
  const { isLoading, hasLocations, locations } = useSearchState();

  if (isLoading && !hasLocations) {
    return (
      <LocationSuggestionsHeader label={LABELS.isLoadingMessage} pad="lg" />
    );
  }

  return (
    <FlexCol>
      <LocationSuggestionsHeader label={LABELS.locations} sticky>
        <ScopeTabList />
      </LocationSuggestionsHeader>
      {hasLocations ? (
        <VirtualList
          items={locations}
          estimateSize={84}
          containerRef={containerRef}
          renderItem={(loc) => <LocationLink key={loc.id} location={loc} />}
        />
      ) : (
        <LocationResultsStatus />
      )}
    </FlexCol>
  );
};
