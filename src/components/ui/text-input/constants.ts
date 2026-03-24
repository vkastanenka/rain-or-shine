export const TEXT_INPUT_SIZE_MAP = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
} as const;

export const TEXT_INPUT_COLOR_MAP = {
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
} as const;

export const TEXT_INPUT_VARIANT_MAP = { ghost: "input-ghost" } as const;

export const TEXT_INPUT_TYPE_MAP = {
  date: "date",
  time: "time",
  datetime: "datetime-local",
  search: "search",
  text: "text",
} as const;
