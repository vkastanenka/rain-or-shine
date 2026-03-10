import { createOpenMeteoDailyTimePeriods } from "./createOpenMeteoDailyTimePeriods";
import { createOpenMeteoTimePeriodListData } from "./createOpenMeteoTimePeriodListData";
import type {
  OpenMeteoHourlyForecastByTimePeriodPeriodList,
  NormalizedOpenMeteoForecastHourlyListItem,
} from "../types";

export const groupOpenMeteoHourlyForecastByDateTimePeriod = (
  hourlyList: NormalizedOpenMeteoForecastHourlyListItem[],
): OpenMeteoHourlyForecastByTimePeriodPeriodList => {
  const dailyTimePeriods = createOpenMeteoDailyTimePeriods(hourlyList);
  const dailyTimePeriodsListData =
    createOpenMeteoTimePeriodListData(dailyTimePeriods);
  return dailyTimePeriodsListData;
};
