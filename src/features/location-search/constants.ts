export const LIST_ITEM_PADDING_MAP = {
  sm: "px-4 py-4",
  lg: "px-4 py-7",
} as const;

export const MIN_ACTIVE_QUERY_LENGTH = 2;


export const QUERY_COUNT_MAP = {
  default: 20,
  max: 100,
};

export const QUERY_SCOPE_MAP = {
  local: "local",
  global: "global",
} as const;

export const LABELS = {
  placeholder: "Enter location",
  isLoadingMessage: "Searching...",
  locations: "Locations",
  recentLocations: "Recent locations",
  noLocationsFound: "No locations found",
  searchToFind: "Search to find locations",
  expandSearchBreadth: "Expand search breadth",
} as const;

export const ERRORS = {
  stateProviderHookMissingContext:
    "useSearchState must be used within Provider",
  actionProviderHookMissingContext:
    "useSearchActions must be used within Provider",
};
