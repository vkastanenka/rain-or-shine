import type { MapKey, MapValue } from "@/types";
import { SUGGESTION_PADDING_MAP } from "./constants";

/**
 * Maps
 */

export type SuggestionPaddingMapKey = MapKey<typeof SUGGESTION_PADDING_MAP>;
export type SuggestionPaddingMapValue = MapValue<typeof SUGGESTION_PADDING_MAP>;

/**
 * Components
 */

export interface TextInputSuggestionsButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface TextInputSuggestionsContainerProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
}

export interface TextInputSuggestionsMessageProps {
  label: string;
}

export interface TextInputSuggestionsHeaderProps {
  label: string;
  pad?: SuggestionPaddingMapKey;
  sticky?: boolean;
  className?: string;
  children?: React.ReactNode;
}
