import { TIME_INTERVAL_MAP } from "../constants";
import type {
  NormalizedForecastTimeIntervalListItem,
  NormalizedForecastHourlyListItem,
} from "./normalized";

export type ForecastTimePeriodListItem = NormalizedForecastTimeIntervalListItem<
  typeof TIME_INTERVAL_MAP.Hourly
> & { timePeriod: string };

export type HourlyForecastTimePeriodList = ForecastTimePeriodListItem[];

export type ForecastTimePeriods = Record<
  string,
  Record<string, NormalizedForecastHourlyListItem[]>
>;

export type HourlyForecastByTimePeriodListItem = {
  time: string;
  timePeriodItems: ForecastTimePeriodListItem[];
};

export type HourlyForecastByTimePeriodPeriodList =
  HourlyForecastByTimePeriodListItem[];
