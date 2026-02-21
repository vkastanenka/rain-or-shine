import { cn, resolveResponsiveValues } from "@/utils";
import {
  FLEX_ALIGN_MAP,
  FLEX_DIRECTION_MAP,
  FLEX_GAP_MAP,
  FLEX_JUSTIFY_MAP,
} from "./flex.constants";
import { type FlexProps } from "./flex.types";

export const Flex = ({
  direction = "row",
  justify = "start",
  align = "center",
  gap = 4,
  wrap = false,
  className,
  children,
  ...props
}: FlexProps) => {
  return (
    <div
      className={cn(
        "flex",
        resolveResponsiveValues(direction, FLEX_DIRECTION_MAP),
        resolveResponsiveValues(justify, FLEX_JUSTIFY_MAP),
        resolveResponsiveValues(align, FLEX_ALIGN_MAP),
        resolveResponsiveValues(wrap, {
          true: "flex-wrap",
          false: "flex-nowrap",
        }),
        resolveResponsiveValues(gap, FLEX_GAP_MAP),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
