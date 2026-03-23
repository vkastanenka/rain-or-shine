import { cn, resolveResponsiveValues } from "@/utils";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { Button } from "../button";
import {
  TEXT_INPUT_SIZE_MAP,
  TEXT_INPUT_COLOR_MAP,
  TEXT_INPUT_VARIANT_MAP,
  TEXT_INPUT_TYPE_MAP,
} from "./text-input.constants";
import { type TextInputProps } from "./text-input.types";
import { useRef } from "react";

export const TextInput = ({
  className,
  size,
  color,
  variant,
  suggestions,
  type = "text",
  value,
  onClear,
  ...props
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearClick = () => {
    onClear?.();
    inputRef.current?.focus();
  };

  const isSearch = type === TEXT_INPUT_TYPE_MAP.search;
  const iconColor =
    "text-[color-mix(in_oklab,var(--color-base-content)_20%,transparent)]";

  const combinedClasses = cn(
    "input",
    size && resolveResponsiveValues(size, TEXT_INPUT_SIZE_MAP),
    color && resolveResponsiveValues(color, TEXT_INPUT_COLOR_MAP),
    variant && resolveResponsiveValues(variant, TEXT_INPUT_VARIANT_MAP),
    className,
  );

  const inputElement = (
    <>
      <input
        {...props}
        ref={inputRef}
        value={value}
        type={type}
        list={suggestions?.id ? suggestions.id : undefined}
        className={cn(
          isSearch ? "" : combinedClasses,
          "[&::-webkit-search-cancel-button]:appearance-none",
          "[&::-webkit-search-decoration]:appearance-none",
        )}
      />
      {suggestions?.collection && suggestions?.collection.length > 0 && (
        <datalist id={suggestions.id}>
          {suggestions.collection.map((s, i) => (
            <option key={`${s}-${i}`} value={s} />
          ))}
        </datalist>
      )}
    </>
  );

  if (isSearch) {
    return (
      <label className={cn(combinedClasses)}>
        <FaSearch className={iconColor} />
        {inputElement}
        {value && (
          <Button
            variant="ghost"
            shape="circle"
            onClick={handleClearClick}
            aria-label="Clear search"
          >
            <FaTimes />
          </Button>
        )}
      </label>
    );
  }

  return inputElement;
};
