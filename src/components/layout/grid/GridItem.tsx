import { cn, resolveResponsiveValues } from "@/utils";
import { GRID_COL_SPAN_MAP, GRID_ORDER_MAP } from "./constants";
import { type GridItemProps } from "./types";

export const GridItem = ({
  order,
  span,
  className,
  children,
  ...props
}: GridItemProps) => {
  return (
    <div
      className={cn(
        span && resolveResponsiveValues(span, GRID_COL_SPAN_MAP),
        order && resolveResponsiveValues(order, GRID_ORDER_MAP),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
