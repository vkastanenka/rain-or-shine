import { type OpenMeteoForecastHourlyListItem } from "../../../types";
import { type OpenMeteoHourlyForecastByTimePeriodPeriodList } from "../types";
import { createOpenMeteoDailyTimePeriods } from "./createOpenMeteoDailyTimePeriods";
import { createOpenMeteoTimePeriodListData } from "./createOpenMeteoTimePeriodListData";

export const groupOpenMeteoHourlyForecastByDateTimePeriod = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoHourlyForecastByTimePeriodPeriodList => {
  const dailyTimePeriods = createOpenMeteoDailyTimePeriods(hourlyList);
  const dailyTimePeriodsListData =
    createOpenMeteoTimePeriodListData(dailyTimePeriods);
  return dailyTimePeriodsListData;
};
