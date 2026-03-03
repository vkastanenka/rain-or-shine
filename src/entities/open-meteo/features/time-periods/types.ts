import { OPEN_METEO_TIME_INTERVAL_MAP } from "../../constants";
import {
  type NormalizedOpenMeteoForecastTimeIntervalListItem,
  type OpenMeteoForecastHourlyListItem,
} from "../../types";

export type OpenMeteoForecastTimePeriodListItem =
  NormalizedOpenMeteoForecastTimeIntervalListItem<
    typeof OPEN_METEO_TIME_INTERVAL_MAP.Hourly
  > & { timePeriod: string };

export type OpenMeteoHourlyForecastTimePeriodList =
  OpenMeteoForecastTimePeriodListItem[];

export type OpenMeteoForecastTimePeriods = Record<
  string,
  Record<string, OpenMeteoForecastHourlyListItem[]>
>;

export type OpenMeteoHourlyForecastByTimePeriodListItem = {
  time: string;
  timePeriodItems: OpenMeteoForecastTimePeriodListItem[];
};

export type OpenMeteoHourlyForecastByTimePeriodPeriodList =
  OpenMeteoHourlyForecastByTimePeriodListItem[];
