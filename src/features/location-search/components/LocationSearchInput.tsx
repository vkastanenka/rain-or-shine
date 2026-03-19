import { TextInput } from "@/components";
import { LABELS } from "../constants";
import { useSearchState, useSearchActions } from "../hooks";

export const LocationSearchInput = () => {
  const { size, query } = useSearchState();
  const { handleClear, handleQueryChange, setIsFocused } = useSearchActions();

  return (
    <TextInput
      type="search"
      className="w-full"
      size={size ?? { base: "lg", md: "xl" }}
      value={query}
      placeholder={LABELS.placeholder}
      onChange={(e) => handleQueryChange(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onClear={handleClear}
    />
  );
};
