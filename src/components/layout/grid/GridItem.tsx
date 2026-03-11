import { cn, resolveResponsiveValues } from "@/utils";
import { GRID_COL_SPAN_MAP, GRID_ORDER_MAP } from "./grid.constants";
import { type GridItemProps } from "./grid.types";

export const GridItem = ({
  order,
  span,
  fit = false,
  className,
  children,
  ...props
}: GridItemProps) => {
  return (
    <div
      className={cn(
        span && resolveResponsiveValues(span, GRID_COL_SPAN_MAP),
        order && resolveResponsiveValues(order, GRID_ORDER_MAP),
        fit && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
