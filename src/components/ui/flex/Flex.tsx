import { cn, resolveResponsiveValues } from "@/utils";
import { flexAlignMap, flexGapMap, flexJustifyMap } from "./flex.constants";
import {
  type FlexAlign,
  type FlexDirection,
  type FlexGap,
  type FlexJustify,
  type FlexProps,
} from "./flex.types";

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
        resolveResponsiveValues<FlexDirection>(direction, {
          row: "flex-row",
          col: "flex-col",
          "row-reverse": "flex-row-reverse",
          "col-reverse": "flex-col-reverse",
        }),
        resolveResponsiveValues<FlexJustify>(justify, flexJustifyMap),
        resolveResponsiveValues<FlexAlign>(align, flexAlignMap),
        resolveResponsiveValues<boolean>(wrap, {
          true: "flex-wrap",
          false: "flex-nowrap",
        }),
        resolveResponsiveValues<FlexGap>(gap, flexGapMap),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
