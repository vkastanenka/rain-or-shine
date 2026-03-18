export const LABELS = {
  placeholder: "Enter location",
  isLoadingMessage: "Searching...",
  locations: "Locations",
  recentLocations: "Recent locations",
  noLocationsFound: "No locations found",
  searchToFind: "Search to find locations",
  expandSearchBreadth: "Expand search breadth",
} as const;

export const QUERY_COUNT_MAP = {
  default: 20,
  max: 100,
}

export const QUERY_SCOPE_MAP = {
  local: "local",
  global: "global",
} as const;
