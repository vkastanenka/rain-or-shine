import { OPEN_METEO_TIME_INTERVAL_MAP } from "../constants";
import type {
  NormalizedOpenMeteoForecastTimeIntervalListItem,
  NormalizedOpenMeteoForecastHourlyListItem,
} from "./normalized";

export type OpenMeteoForecastTimePeriodListItem =
  NormalizedOpenMeteoForecastTimeIntervalListItem<
    typeof OPEN_METEO_TIME_INTERVAL_MAP.Hourly
  > & { timePeriod: string };

export type OpenMeteoHourlyForecastTimePeriodList =
  OpenMeteoForecastTimePeriodListItem[];

export type OpenMeteoForecastTimePeriods = Record<
  string,
  Record<string, NormalizedOpenMeteoForecastHourlyListItem[]>
>;

export type OpenMeteoHourlyForecastByTimePeriodListItem = {
  time: string;
  timePeriodItems: OpenMeteoForecastTimePeriodListItem[];
};

export type OpenMeteoHourlyForecastByTimePeriodPeriodList =
  OpenMeteoHourlyForecastByTimePeriodListItem[];
