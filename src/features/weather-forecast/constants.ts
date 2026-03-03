/**
 * Labels
 */

export const FORECAST_SHARED_LABELS_MAP = {
  feels: "Feels",
} as const;

export const FORECAST_DIURNAL_PERIOD_LABELS_MAP = {
  day: "Day",
  night: "Night",
} as const;

export const FORECAST_TIME_PERIOD_LABELS_MAP = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  overnight: "Overnight",
} as const;

export const FORECAST_LABELS_MAP = {
  ...FORECAST_SHARED_LABELS_MAP,
  ...FORECAST_DIURNAL_PERIOD_LABELS_MAP,
  ...FORECAST_TIME_PERIOD_LABELS_MAP,
} as const;

/**
 * Logic
 */

export const FORECAST_DIURNAL_PERIOD_MAP = {
  Day: "day",
  Night: "night",
} as const;

export const FORECAST_TIME_PERIOD_MAP = {
  Morning: "morning",
  Afternoon: "afternoon",
  Evening: "evening",
  Overnight: "overnight",
} as const;
