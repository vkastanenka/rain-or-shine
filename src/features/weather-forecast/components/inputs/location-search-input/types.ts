import { type TextInputSizeMapKey } from "@/components";
import { type ResponsiveValue } from "@/utils";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";

export interface LocationSearchInputProps {
  currentCountryCode?: string;
  size?: ResponsiveValue<TextInputSizeMapKey>;
  className?: string;
}

export interface LocationSearchSuggestionsProps {
  debouncedQuery: string;
  isLoading: boolean;
  results: ValidWeatherPathLocation[];
  recentLocations?: ValidWeatherPathLocation[];
  listIsOpen: boolean;
  query: string;
  onClickSuggestion: (loc: ValidWeatherPathLocation) => void;
  currentCountryCode?: string;
  scopeIsGlobal: boolean;
  toggleScopeIsGlobal: () => void;
}

export interface LocationSearchSuggestionsLinkProps {
  results: ValidWeatherPathLocation[];
  onClickSuggestion: (loc: ValidWeatherPathLocation) => void;
}

export interface LocationSearchResultsHeaderProps {
  children: React.ReactNode;
  className?: string;
  currentCountryCode?: string;
  scopeIsGlobal: boolean;
  toggleScopeIsGlobal: () => void;
}
