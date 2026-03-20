import { forwardRef } from "react";
import { AnimateExpand } from "@/components";
import { cn } from "@/utils";
import type { TextInputSuggestionsContainerProps } from "./types";

export const TextInputSuggestionsContainer = forwardRef(
  (
    { children, isOpen, className }: TextInputSuggestionsContainerProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <AnimateExpand
        ref={ref}
        isOpen={isOpen}
        className={cn("text-input-suggestions-container", className)}
      >
        {children}
      </AnimateExpand>
    );
  },
);
