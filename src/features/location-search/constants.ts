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
  expandSearchBreadth: "Search everywhere",
} as const;

export const ERRORS = {
  stateProviderHookMissingContext:
    "useSearchState must be used within Provider",
  actionProviderHookMissingContext:
    "useSearchActions must be used within Provider",
};
