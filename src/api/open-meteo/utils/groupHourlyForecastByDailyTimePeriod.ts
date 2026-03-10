import { createForecastDailyTimePeriods } from "./createForecastDailyTimePeriods";
import { createForecastTimePeriodList } from "./createForecastTimePeriodList";
import type {
  HourlyForecastDayCollection,
  HourlyForecastRecord,
} from "../types";

export const groupHourlyForecastByDateTimePeriod = (
  hourlyList: HourlyForecastRecord[],
): HourlyForecastDayCollection[] => {
  const dailyTimePeriods = createForecastDailyTimePeriods(hourlyList);
  const dailyTimePeriodsListData =
    createForecastTimePeriodList(dailyTimePeriods);
  return dailyTimePeriodsListData;
};
