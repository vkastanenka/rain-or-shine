import { type ResponsiveValue } from "@/utils";
import {
  GRID_ALIGN_MAP,
  GRID_COL_SPAN_MAP,
  GRID_COLS_MAP,
  GRID_GAP_MAP,
  GRID_JUSTIFY_MAP,
  GRID_ORDER_MAP,
} from "./grid.constants";

export type GridAlignMapKey = keyof typeof GRID_ALIGN_MAP;
export type GridAlignMapValue =
  (typeof GRID_ALIGN_MAP)[keyof typeof GRID_ALIGN_MAP];

export type GridColSpanMapKey = keyof typeof GRID_COL_SPAN_MAP;
export type GridColSpanMapValue =
  (typeof GRID_COL_SPAN_MAP)[keyof typeof GRID_COL_SPAN_MAP];

export type GridColsMapKey = keyof typeof GRID_COLS_MAP;
export type GridColsMapValue =
  (typeof GRID_COLS_MAP)[keyof typeof GRID_COLS_MAP];

export type GridGapMapKey = keyof typeof GRID_GAP_MAP;
export type GridGapMapValue = (typeof GRID_GAP_MAP)[keyof typeof GRID_GAP_MAP];

export type GridJustifyMapKey = keyof typeof GRID_JUSTIFY_MAP;
export type GridJustifyMapValue =
  (typeof GRID_JUSTIFY_MAP)[keyof typeof GRID_JUSTIFY_MAP];

export type GridOrderMapKey = keyof typeof GRID_ORDER_MAP;
export type GridOrderMapValue =
  (typeof GRID_ORDER_MAP)[keyof typeof GRID_ORDER_MAP];

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: ResponsiveValue<GridAlignMapValue>;
  cols?: ResponsiveValue<GridColsMapKey>;
  gap?: ResponsiveValue<GridGapMapKey>;
  justify?: ResponsiveValue<GridJustifyMapKey>;
  fit?: boolean;
  children: React.ReactNode;
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  order?: ResponsiveValue<GridOrderMapKey>;
  span?: ResponsiveValue<GridColSpanMapKey>;
  fit?: boolean;
  children: React.ReactNode;
}
