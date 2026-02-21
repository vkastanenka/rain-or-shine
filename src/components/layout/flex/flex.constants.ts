export const FLEX_ALIGN_MAP = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
} as const;

export const FLEX_DIRECTION_MAP = {
  row: "flex-row",
  col: "flex-col",
  ["row-reverse"]: "flex-row-reverse",
  ["col-reverse"]: "flex-col-reverse",
} as const;

export const FLEX_GAP_MAP = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
} as const;

export const FLEX_JUSTIFY_MAP = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;
