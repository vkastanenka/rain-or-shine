import { createForecastDailyTimePeriods } from "./createForecastDailyTimePeriods";
import { createForecastTimePeriodList } from "./createForecastTimePeriodList";
import type {
  HourlyForecastByTimePeriodPeriodList,
  NormalizedForecastHourlyListItem,
} from "../types";

export const groupHourlyForecastByDateTimePeriod = (
  hourlyList: NormalizedForecastHourlyListItem[],
): HourlyForecastByTimePeriodPeriodList => {
  const dailyTimePeriods = createForecastDailyTimePeriods(hourlyList);
  const dailyTimePeriodsListData = createForecastTimePeriodList(dailyTimePeriods);
  return dailyTimePeriodsListData;
};
