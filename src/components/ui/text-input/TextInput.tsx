import { useRef } from "react";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { ACCESSIBILITY_LABELS } from "@/constants";
import { cn, resolveResponsiveValues } from "@/utils";
import { Button } from "../button";
import {
  TEXT_INPUT_SIZE_MAP,
  TEXT_INPUT_COLOR_MAP,
  TEXT_INPUT_VARIANT_MAP,
  TEXT_INPUT_TYPE_MAP,
} from "./constants";
import { type TextInputProps } from "./types";

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

  const styles = cn(
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
        className={cn(isSearch ? "" : styles, "remove-input-decorations")}
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
      <label className={cn(styles)}>
        <FaSearch className={"text-input-button-color"} />
        {inputElement}
        {value && (
          <Button
            variant="ghost"
            shape="circle"
            onClick={handleClearClick}
            aria-label={ACCESSIBILITY_LABELS.actions.clearSearchInput}
          >
            <FaTimes />
          </Button>
        )}
      </label>
    );
  }

  return inputElement;
};
