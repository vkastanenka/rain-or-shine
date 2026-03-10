import { FORECAST_INTERVALS, FORECAST_INTERVAL_UNITS } from "../constants";

export type ForecastIntervalValue =
  (typeof FORECAST_INTERVALS)[keyof typeof FORECAST_INTERVALS];

export type ForecastIntervalUnitValue =
  (typeof FORECAST_INTERVAL_UNITS)[keyof typeof FORECAST_INTERVAL_UNITS];
