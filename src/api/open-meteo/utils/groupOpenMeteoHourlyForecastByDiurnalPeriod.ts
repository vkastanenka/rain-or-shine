import { createOpenMeteoDiurnalPeriods } from "./createOpenMeteoDiurnalPeriods";
import { createOpenMeteoTimePeriodListData } from "./createOpenMeteoTimePeriodListData";
import type {
  OpenMeteoHourlyForecastByTimePeriodPeriodList,
  NormalizedOpenMeteoForecastHourlyListItem,
} from "../types";

export const groupOpenMeteoHourlyForecastByDiurnalPeriod = (
  hourlyList: NormalizedOpenMeteoForecastHourlyListItem[],
): OpenMeteoHourlyForecastByTimePeriodPeriodList => {
  const timePeriods = createOpenMeteoDiurnalPeriods(hourlyList);
  const diurnalPeriodsListData = createOpenMeteoTimePeriodListData(timePeriods);
  return diurnalPeriodsListData;
};
