export const API_CONFIG = {
  V1: {
    name: "Open Meteo Weather Forecast v1",
    baseUrl: "https://api.open-meteo.com/v1",
    endpoints: { forecast: "/forecast" },
  },
} as const;

export const FORECAST_INTERVAL_MAP = {
  Current: "current",
  Daily: "daily",
  Minutely15: "minutely_15",
  Hourly: "hourly",
} as const;

export const FORECAST_INTERVAL_UNIT_MAP = {
  Current: "current_units",
  Daily: "daily_units",
  Minutely15: "minutely_15_units",
  Hourly: "hourly_units",
} as const;
