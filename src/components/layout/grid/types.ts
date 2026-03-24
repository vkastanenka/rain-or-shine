import type { HTMLDivProps, MapKey, MapValue } from "@/types";
import { type ResponsiveValue } from "@/utils";
import {
  GRID_ALIGN_MAP,
  GRID_COL_SPAN_MAP,
  GRID_COLS_MAP,
  GRID_GAP_MAP,
  GRID_JUSTIFY_MAP,
  GRID_ORDER_MAP,
} from "./constants";

/**
 * Constants
 */

export type GridAlignMapKey = MapKey<typeof GRID_ALIGN_MAP>;
export type GridAlignMapValue = MapValue<typeof GRID_ALIGN_MAP>;

export type GridColSpanMapKey = MapKey<typeof GRID_COL_SPAN_MAP>;
export type GridColSpanMapValue = MapValue<typeof GRID_COL_SPAN_MAP>;

export type GridColsMapKey = MapKey<typeof GRID_COLS_MAP>;
export type GridColsMapValue = MapValue<typeof GRID_COLS_MAP>;

export type GridGapMapKey = MapKey<typeof GRID_GAP_MAP>;
export type GridGapMapValue = MapValue<typeof GRID_GAP_MAP>;

export type GridJustifyMapKey = MapKey<typeof GRID_JUSTIFY_MAP>;
export type GridJustifyMapValue = MapValue<typeof GRID_JUSTIFY_MAP>;

export type GridOrderMapKey = MapKey<typeof GRID_ORDER_MAP>;
export type GridOrderMapValue = MapValue<typeof GRID_ORDER_MAP>;

/**
 * Components
 */

export interface GridProps extends HTMLDivProps {
  children: React.ReactNode;
  align?: ResponsiveValue<GridAlignMapValue>;
  cols?: ResponsiveValue<GridColsMapKey>;
  gap?: ResponsiveValue<GridGapMapKey>;
  justify?: ResponsiveValue<GridJustifyMapKey>;
}

export interface GridItemProps extends HTMLDivProps {
  order?: ResponsiveValue<GridOrderMapKey>;
  span?: ResponsiveValue<GridColSpanMapKey>;
  children: React.ReactNode;
}

export type GridComponent = React.FC<GridProps> & {
  Item: React.FC<GridItemProps>;
};