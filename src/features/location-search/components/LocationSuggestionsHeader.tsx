import { FlexRow, Text } from "@/components";
import { cn } from "@/utils";
import { LIST_ITEM_PADDING_MAP } from "../constants";
import type { LocationSuggestionsHeaderProps } from "../types";

export const LocationSuggestionsHeader = ({
  label,
  pad,
  sticky,
  className,
  children,
}: LocationSuggestionsHeaderProps) => {
  const baseClasses = cn(
    "bg-neutral",
    "w-full",
    LIST_ITEM_PADDING_MAP[pad ?? "sm"],
    sticky && "sticky top-0 z-50",
    className,
  );

  const Label = <Text>{label}</Text>;

  if (!children) {
    return <div className={cn(baseClasses)}>{Label}</div>;
  }

  return (
    <FlexRow
      fit
      gap={2}
      align="center"
      justify="between"
      className={baseClasses}
    >
      {Label}
      {children}
    </FlexRow>
  );
};
