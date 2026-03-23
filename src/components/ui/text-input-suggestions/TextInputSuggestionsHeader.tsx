import { FlexRow, Text } from "@/components";
import { cn } from "@/utils";
import { SUGGESTION_PADDING_MAP } from "./constants";
import type { TextInputSuggestionsHeaderProps } from "./types";

export const TextInputSuggestionsHeader = ({
  label,
  pad,
  sticky,
  className,
  children,
}: TextInputSuggestionsHeaderProps) => {
  const baseClasses = cn(
    "bg-neutral",
    "w-full",
    SUGGESTION_PADDING_MAP[pad ?? "sm"],
    sticky && "sticky top-0 z-50",
    className,
  );

  const Label = (
    <Text type={{ base: "body1", sm: "large" }} className="font-medium">
      {label}
    </Text>
  );

  if (!children) {
    return <div className={cn(baseClasses)}>{Label}</div>;
  }

  return (
    <FlexRow gap={2} align="center" justify="between" className={baseClasses}>
      {Label}
      {children}
    </FlexRow>
  );
};
