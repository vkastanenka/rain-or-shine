import {
  FORECAST_INTERVAL_MAP,
  FORECAST_INTERVAL_UNIT_MAP,
} from "../constants";
import type {
  ForecastCurrentVariables,
  ForecastCurrentVariablesUnits,
  ForecastDailyVariables,
  ForecastDailyVariablesUnits,
  ForecastHourlyVariables,
  ForecastHourlyVariablesUnits,
  ForecastMinutely15Variables,
  ForecastMinutely15VariablesUnits,
} from "./variables";

export interface ForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  // Time Interval Data
  [FORECAST_INTERVAL_MAP.Current]?: ForecastCurrentVariables;
  [FORECAST_INTERVAL_MAP.Daily]?: ForecastDailyVariables;
  [FORECAST_INTERVAL_MAP.Hourly]?: ForecastHourlyVariables;
  [FORECAST_INTERVAL_MAP.Minutely15]?: ForecastMinutely15Variables;

  // Time Interval Units
  [FORECAST_INTERVAL_UNIT_MAP.Current]?: ForecastCurrentVariablesUnits;
  [FORECAST_INTERVAL_UNIT_MAP.Daily]?: ForecastDailyVariablesUnits;
  [FORECAST_INTERVAL_UNIT_MAP.Hourly]?: ForecastHourlyVariablesUnits;
  [FORECAST_INTERVAL_UNIT_MAP.Minutely15]?: ForecastMinutely15VariablesUnits;
}
