import { cn, resolveResponsiveValues } from "@/utils";
import { 
  GRID_ALIGN_MAP, 
  GRID_COLS_MAP, 
  GRID_GAP_MAP, 
  GRID_JUSTIFY_MAP 
} from "./grid.constants";
import { type GridProps } from "./grid.types";

export const Grid = ({
  cols = 1,
  gap = 0,
  align,
  justify,
  className,
  children,
  ...props
}: GridProps) => {
  return (
    <div
      className={cn(
        "grid",
        resolveResponsiveValues(cols, GRID_COLS_MAP),
        resolveResponsiveValues(gap, GRID_GAP_MAP),
        align && resolveResponsiveValues(align, GRID_ALIGN_MAP),
        justify && resolveResponsiveValues(justify, GRID_JUSTIFY_MAP),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};