import { type TextInputSizeMapKey } from "@/components";
import { type ResponsiveValue } from "@/utils";
import { type ValidWeatherPathLocation } from "@/features/weather-forecast/types";

export interface LocationSearchInputProps {
  size?: ResponsiveValue<TextInputSizeMapKey>;
  className?: string;
}

export interface LocationSearchSuggestionsProps {
  isLoading: boolean;
  results: ValidWeatherPathLocation[];
  recentLocations?: ValidWeatherPathLocation[];
  listIsOpen: boolean;
  query: string;
  onClickSuggestion: (loc: ValidWeatherPathLocation) => void;
}

export interface LocationSearchSuggestionLinkProps {
  title: string;
  results: ValidWeatherPathLocation[];
  onClickSuggestion: (loc: ValidWeatherPathLocation) => void;
}
