import { FORECAST_INTERVALS, FORECAST_INTERVAL_UNITS } from "../constants";
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
  [FORECAST_INTERVALS.Current]?: ForecastCurrentVariables;
  [FORECAST_INTERVALS.Daily]?: ForecastDailyVariables;
  [FORECAST_INTERVALS.Hourly]?: ForecastHourlyVariables;
  [FORECAST_INTERVALS.Minutely15]?: ForecastMinutely15Variables;

  // Time Interval Units
  [FORECAST_INTERVAL_UNITS.Current]?: ForecastCurrentVariablesUnits;
  [FORECAST_INTERVAL_UNITS.Daily]?: ForecastDailyVariablesUnits;
  [FORECAST_INTERVAL_UNITS.Hourly]?: ForecastHourlyVariablesUnits;
  [FORECAST_INTERVAL_UNITS.Minutely15]?: ForecastMinutely15VariablesUnits;
}
