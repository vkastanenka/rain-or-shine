import {
  OPEN_METEO_TIME_INTERVAL_MAP,
  OPEN_METEO_TIME_INTERVAL_UNIT_MAP,
} from "../constants";
import {
  type OpenMeteoForecastCurrentVariables,
  type OpenMeteoForecastCurrentVariablesUnits,
  type OpenMeteoForecastDailyVariables,
  type OpenMeteoForecastDailyVariablesUnits,
  type OpenMeteoForecastHourlyVariables,
  type OpenMeteoForecastHourlyVariablesUnits,
  type OpenMeteoForecastMinutely15Variables,
  type OpenMeteoForecastMinutely15VariablesUnits,
} from "./variables";

export interface OpenMeteoForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  // Time Interval Data
  [OPEN_METEO_TIME_INTERVAL_MAP.Current]?: OpenMeteoForecastCurrentVariables;
  [OPEN_METEO_TIME_INTERVAL_MAP.Daily]?: OpenMeteoForecastDailyVariables;
  [OPEN_METEO_TIME_INTERVAL_MAP.Hourly]?: OpenMeteoForecastHourlyVariables;
  [OPEN_METEO_TIME_INTERVAL_MAP.Minutely15]?: OpenMeteoForecastMinutely15Variables;

  // Time Interval Units
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Current]?: OpenMeteoForecastCurrentVariablesUnits;
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Daily]?: OpenMeteoForecastDailyVariablesUnits;
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Hourly]?: OpenMeteoForecastHourlyVariablesUnits;
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Minutely15]?: OpenMeteoForecastMinutely15VariablesUnits;
}
