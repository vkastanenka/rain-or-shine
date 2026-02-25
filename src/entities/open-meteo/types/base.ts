import {
  OPEN_METEO_TIME_INTERVAL_MAP,
  OPEN_METEO_TIME_INTERVAL_UNIT_MAP,
} from "../constants";

export type OpenMeteoForecastVariablesUnits<T> = {
  [K in keyof T]: string;
};

export type OpenMeteoIsDayValue = 1 | 0 | undefined | null;

export type OpenMeteoTimeIntervalMapValue =
  (typeof OPEN_METEO_TIME_INTERVAL_MAP)[keyof typeof OPEN_METEO_TIME_INTERVAL_MAP];

export type OpenMeteoTimeIntervalUnitMapValue =
  (typeof OPEN_METEO_TIME_INTERVAL_UNIT_MAP)[keyof typeof OPEN_METEO_TIME_INTERVAL_UNIT_MAP];
