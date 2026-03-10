import { FORECAST_INTERVAL_MAP, FORECAST_INTERVAL_UNIT_MAP } from "../constants";

export type ForecastIntervalMapValue =
  (typeof FORECAST_INTERVAL_MAP)[keyof typeof FORECAST_INTERVAL_MAP];

export type ForecastIntervalUnitMapValue =
  (typeof FORECAST_INTERVAL_UNIT_MAP)[keyof typeof FORECAST_INTERVAL_UNIT_MAP];
