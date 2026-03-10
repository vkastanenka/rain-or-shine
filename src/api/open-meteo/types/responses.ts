import { TIME_INTERVAL_MAP, TIME_INTERVAL_UNIT_MAP } from "../constants";
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
  [TIME_INTERVAL_MAP.Current]?: ForecastCurrentVariables;
  [TIME_INTERVAL_MAP.Daily]?: ForecastDailyVariables;
  [TIME_INTERVAL_MAP.Hourly]?: ForecastHourlyVariables;
  [TIME_INTERVAL_MAP.Minutely15]?: ForecastMinutely15Variables;

  // Time Interval Units
  [TIME_INTERVAL_UNIT_MAP.Current]?: ForecastCurrentVariablesUnits;
  [TIME_INTERVAL_UNIT_MAP.Daily]?: ForecastDailyVariablesUnits;
  [TIME_INTERVAL_UNIT_MAP.Hourly]?: ForecastHourlyVariablesUnits;
  [TIME_INTERVAL_UNIT_MAP.Minutely15]?: ForecastMinutely15VariablesUnits;
}
