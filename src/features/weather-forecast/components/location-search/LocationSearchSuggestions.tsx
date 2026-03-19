import { FcGlobe } from "react-icons/fc";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import {
  AnimateExpand,
  Button,
  FlexCol,
  FlexRow,
  Text,
  LazyCountryFlagIcon,
  type CountryFlagIconName,
  VirtualList,
} from "@/components";
import { cn } from "@/utils";
import { LocationLink } from "./LocationLink";
import { LABELS, QUERY_COUNT_MAP, QUERY_SCOPE_MAP } from "./constants";
import { useSearchActions, useSearchState } from "./hooks";
import type { QueryScopeMapValue } from "./types";
import { useRef } from "react";

const LIST_ITEM_PADDING_MAP = {
  sm: "px-4 py-4",
  lg: "px-4 py-7",
} as const;

const SectionHeader = ({
  label,
  pad,
  sticky,
  className,
  children,
}: {
  label: string;
  pad?: keyof typeof LIST_ITEM_PADDING_MAP;
  sticky?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => {
  const baseClasses = cn(
    "bg-neutral",
    "w-full",
    LIST_ITEM_PADDING_MAP[pad ?? "sm"],
    sticky && "sticky top-0 z-50",
    className,
  );

  const Label = <Text>{label}</Text>;

  if (!children) {
    return <div className={cn(baseClasses)}>{Label}</div>;
  }

  return (
    <FlexRow
      fit
      gap={2}
      align="center"
      justify="between"
      className={baseClasses}
    >
      {Label}
      {children}
    </FlexRow>
  );
};

const ScopeButton = ({
  scope,
  isActive,
  onClick,
}: {
  scope: QueryScopeMapValue;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { locality } = useSearchState();

  const Icon =
    scope === "local" ? (
      <LazyCountryFlagIcon
        name={locality?.countryCode as CountryFlagIconName} // TODO: Handle better
      />
    ) : (
      <FcGlobe />
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "tab transition-all",
        isActive ? "tab-active" : "opacity-70 hover:opacity-100",
      )}
    >
      {Icon}
    </button>
  );
};

const ScopeTabList = () => {
  const { queryScope } = useSearchState();
  const { setQueryScope } = useSearchActions();
  return (
    <div role="tablist" className="tabs tabs-box">
      <ScopeButton
        scope={QUERY_SCOPE_MAP.local}
        isActive={queryScope === QUERY_SCOPE_MAP.local}
        onClick={() => setQueryScope(QUERY_SCOPE_MAP.local)}
      />
      <ScopeButton
        scope={QUERY_SCOPE_MAP.global}
        isActive={queryScope === QUERY_SCOPE_MAP.global}
        onClick={() => setQueryScope(QUERY_SCOPE_MAP.global)}
      />
    </div>
  );
};

const RecentLocations = () => {
  const { recentLocations, hasRecentLocations } = useSearchState();
  const { setRecentLocations } = useSearchActions();

  if (!recentLocations || !hasRecentLocations) {
    return null;
  }

  return (
    <FlexCol>
      <SectionHeader label={LABELS.recentLocations}>
        <Button shape="circle" onClick={() => setRecentLocations([])}>
          <FaTimes />
        </Button>
      </SectionHeader>
      {recentLocations.map((location) => (
        <LocationLink key={location.id} location={location} />
      ))}
    </FlexCol>
  );
};

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

const LocationResults = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { isLoading, hasLocations, locations } = useSearchState();

  if (isLoading && !hasLocations) {
    return <SectionHeader label={LABELS.isLoadingMessage} pad="lg" />;
  }

  return (
    <FlexCol>
      <SectionHeader label={LABELS.locations} sticky>
        <ScopeTabList />
      </SectionHeader>
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

export const LocationSearchSuggestions = () => {
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
