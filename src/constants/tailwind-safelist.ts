import { generateTailwindSafelist } from "@/utils";

import {
  CONTAINER_WIDTH_MAP,
  CONTAINER_PADDING_MAP,
  FLEX_ALIGN_MAP,
  FLEX_DIRECTION_MAP,
  FLEX_JUSTIFY_MAP,
  FLEX_GAP_MAP,
  GRID_COLS_MAP,
  GRID_COL_SPAN_MAP,
  GRID_JUSTIFY_MAP,
  GRID_ALIGN_MAP,
  GRID_ORDER_MAP,
  SECTION_PADDING_MAP,
} from "@/components";

const ALL_TAILWIND_STYLE_MAPS = [
  CONTAINER_WIDTH_MAP,
  CONTAINER_PADDING_MAP,
  FLEX_ALIGN_MAP,
  FLEX_DIRECTION_MAP,
  FLEX_JUSTIFY_MAP,
  FLEX_GAP_MAP,
  GRID_COLS_MAP,
  GRID_COL_SPAN_MAP,
  GRID_JUSTIFY_MAP,
  GRID_ALIGN_MAP,
  GRID_ORDER_MAP,
  SECTION_PADDING_MAP,
];

export const TAILWIND_SAFELIST = [
  ...generateTailwindSafelist(ALL_TAILWIND_STYLE_MAPS),

  "container",
  "mx-auto",
  "w-full",
  "flex",
  "grid",
  "box-border",
  "flex-wrap",
  "flex-nowrap",
];
