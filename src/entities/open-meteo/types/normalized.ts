import {
  OPEN_METEO_TIME_INTERVAL_MAP,
} from "../constants";
import { normalizeOpenMeteoForecastTimeInterval } from "../utils";
import {type OpenMeteoTimeIntervalMapValue} from './base'

export type NormalizedOpenMeteoForecastTimeIntervalListItem<
  T extends OpenMeteoTimeIntervalMapValue,
> = ReturnType<typeof normalizeOpenMeteoForecastTimeInterval<T>>[number];

export type OpenMeteoForecastDailyListItem =
  NormalizedOpenMeteoForecastTimeIntervalListItem<
    typeof OPEN_METEO_TIME_INTERVAL_MAP.Daily
  >;
export type OpenMeteoForecastHourlyListItem =
  NormalizedOpenMeteoForecastTimeIntervalListItem<
    typeof OPEN_METEO_TIME_INTERVAL_MAP.Hourly
  >;
export type OpenMeteoForecastCurrentListItem =
  NormalizedOpenMeteoForecastTimeIntervalListItem<
    typeof OPEN_METEO_TIME_INTERVAL_MAP.Current
  >;
