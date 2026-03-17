import { type TextInputSizeMapKey } from "@/components";
import { type ResponsiveValue } from "@/utils";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";

export interface LocationSearchInputProps {
  currentCountryCode?: string;
  size?: ResponsiveValue<TextInputSizeMapKey>;
  className?: string;
}

export interface LocationSearchSuggestionsProps {
  query: string;
  debouncedQuery: string;
  isLoading: boolean;
  results: ValidWeatherPathLocation[];
  recentLocations?: ValidWeatherPathLocation[];
  listIsOpen: boolean;
  onClickSuggestion: (loc: ValidWeatherPathLocation) => void;
  currentCountryCode?: string;
  scopeIsGlobal: boolean;
  toggleScopeIsGlobal: () => void;
  onDeleteRecent: () => void;
}

export interface LocationSearchSuggestionsLinkProps {
  results: ValidWeatherPathLocation[];
}

export interface LocationSearchResultsHeaderProps {
  children: React.ReactNode;
  className?: string;
  currentCountryCode?: string;
  scopeIsGlobal: boolean;
  toggleScopeIsGlobal: () => void;
}
