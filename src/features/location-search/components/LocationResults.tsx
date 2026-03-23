import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
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

const ANIMATION_DURATION = 0.3;

export const LocationResults = ({ containerRef }: LocationResultsProps) => {
  const {
    debouncedQuery,
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
      <AnimatePresence mode="popLayout">
        {hasLocations ? (
          <motion.div
            key="results-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
            className="w-full"
          >
            <VirtualList
              items={locations}
              estimateSize={84}
              containerRef={containerRef}
              renderItem={(loc) => <LocationLink key={loc.id} location={loc} />}
            />
          </motion.div>
        ) : (
          <motion.div
            key="status-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            <TextInputSuggestionsMessage
              label={
                showLoading
                  ? LABELS.isLoadingMessage
                  : debouncedQuery && isEmpty
                    ? LABELS.noLocationsFound
                    : LABELS.searchToFind
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {isSettled && canIncrease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
            className="w-full"
          >
            <TextInputSuggestionsButton onClick={handleQueryCountIncrease}>
              {LABELS.expandSearchBreadth}
              <FaArrowRight />
            </TextInputSuggestionsButton>
          </motion.div>
        )}
      </AnimatePresence>
    </FlexCol>
  );
};
