import { type TextInputSizeMapKey } from "@/components";
import { type Location } from "@/services";
import { type ResponsiveValue } from "@/utils";

export type ValidLocation = Location & {
  country_code: string;
  admin1: string;
  name: string;
};

export interface LocationSearchInputProps {
  size?: ResponsiveValue<TextInputSizeMapKey>;
  className?: string;
}

export interface LocationSearchSuggestionsProps {
  isLoading: boolean;
  results: ValidLocation[];
  listIsOpen: boolean;
  query: string;
  onClickSuggestion: () => void;
}
