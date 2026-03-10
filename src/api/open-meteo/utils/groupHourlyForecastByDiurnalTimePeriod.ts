import { createForecastDiurnalTimePeriods } from "./createForecastDiurnalTimePeriods";
import { createForecastTimePeriodList } from "./createForecastTimePeriodList";
import type {
  HourlyForecastByTimePeriodPeriodList,
  NormalizedForecastHourlyListItem,
} from "../types";

export const groupHourlyForecastByDiurnalPeriod = (
  hourlyList: NormalizedForecastHourlyListItem[],
): HourlyForecastByTimePeriodPeriodList => {
  const timePeriods = createForecastDiurnalTimePeriods(hourlyList);
  const diurnalPeriodsListData = createForecastTimePeriodList(timePeriods);
  return diurnalPeriodsListData;
};
