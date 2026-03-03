import {
  type OpenMeteoForecastHourlyListItem,
} from "../../../types";
import { type OpenMeteoHourlyForecastByTimePeriodPeriodList } from "../types";
import { createOpenMeteoDiurnalPeriods } from "./createOpenMeteoDiurnalPeriods";
import { createOpenMeteoTimePeriodListData } from "./createOpenMeteoTimePeriodListData";

export const groupOpenMeteoHourlyForecastByDiurnalPeriod = (
  hourlyList: OpenMeteoForecastHourlyListItem[],
): OpenMeteoHourlyForecastByTimePeriodPeriodList => {
  const timePeriods = createOpenMeteoDiurnalPeriods(hourlyList);
  const diurnalPeriodsListData = createOpenMeteoTimePeriodListData(timePeriods);
  return diurnalPeriodsListData;
};
