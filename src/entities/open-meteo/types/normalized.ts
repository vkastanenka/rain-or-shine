import { type UnwrapArray } from "@/types";
import { OPEN_METEO_TIME_INTERVAL_MAP } from "../constants";
import { type OpenMeteoTimeIntervalMapValue } from "./base";
import { type OpenMeteoForecastResponse } from "./response";

export type NormalizedOpenMeteoForecastTimeIntervalListItem<
  T extends OpenMeteoTimeIntervalMapValue,
  K extends keyof NonNullable<OpenMeteoForecastResponse[T]> = keyof NonNullable<
    OpenMeteoForecastResponse[T]
  >,
> = {
  [P in K]: UnwrapArray<NonNullable<OpenMeteoForecastResponse[T]>[P]>;
};

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
