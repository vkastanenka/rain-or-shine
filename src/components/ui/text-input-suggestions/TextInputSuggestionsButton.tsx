import { Button } from "../button";
import { cn } from "@/utils";

import { SUGGESTION_PADDING_MAP } from "./constants";
import type { TextInputSuggestionsButtonProps } from "./types";

export const TextInputSuggestionsButton = ({
  children,
  className,
  onClick,
}: TextInputSuggestionsButtonProps) => {
  return (
    <Button
      color="neutral"
      size={{ base: "md", sm: "md", lg: "lg" }}
      onClick={onClick}
      className={cn(
        SUGGESTION_PADDING_MAP.lg,
        "w-full",
        "rounded-none",
        className,
      )}
    >
      {children}
    </Button>
  );
};
