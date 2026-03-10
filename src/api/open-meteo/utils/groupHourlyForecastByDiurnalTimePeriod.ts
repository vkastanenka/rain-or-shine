import { createForecastDiurnalTimePeriods } from "./createForecastDiurnalTimePeriods";
import { createForecastTimePeriodList } from "./createForecastTimePeriodList";
import type {
  HourlyForecastDayCollection,
  HourlyForecastRecord,
} from "../types";

export const groupHourlyForecastByDiurnalPeriod = (
  hourlyList: HourlyForecastRecord[],
): HourlyForecastDayCollection[] => {
  const timePeriods = createForecastDiurnalTimePeriods(hourlyList);
  const diurnalPeriodsListData = createForecastTimePeriodList(timePeriods);
  return diurnalPeriodsListData;
};
