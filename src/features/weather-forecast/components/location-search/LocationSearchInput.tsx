import { TextInput } from "@/components";
import { LABELS } from "./constants";
import { useLocationSearch } from "./context";

export const LocationSearchInput = () => {
  const {
    props: { size },
    query,
    setQuery,
    setIsFocused,
    defaultSearchCount,
    maxSearchCount,
    searchCount,
    setSearchCount,
  } = useLocationSearch();

  return (
    <TextInput
      type="search"
      className="w-full"
      size={size ?? { base: "lg", md: "xl" }}
      value={query}
      placeholder={LABELS.placeholder}
      onChange={(e) => {
        setQuery(e.target.value);
        if (searchCount === maxSearchCount) {
          setSearchCount(defaultSearchCount);
        }
      }}
      onFocus={() => setIsFocused(true)}
      onClear={() => {
        setQuery("");
        if (searchCount === maxSearchCount) {
          setSearchCount(defaultSearchCount);
        }
        setIsFocused(false);
      }}
    />
  );
};
