import { Text } from "@/components";
import { SUGGESTION_PADDING_MAP } from "./constants";
import { type TextInputSuggestionsMessageProps } from "./types";

export const TextInputSuggestionsMessage = ({
  label,
}: TextInputSuggestionsMessageProps) => {
  return (
    <div className={SUGGESTION_PADDING_MAP.lg}>
      <Text>{label}</Text>
    </div>
  );
};
