import { calculateForecastHourlyListAverages } from "./calculateForecastHourlyListAverages";
import type {
  NormalizedForecastHourlyListItem,
  ForecastTimePeriodListItem,
} from "../types";

export const createForecastTimePeriodListItem = (
  timePeriodKey: string,
  hourlyItems: NormalizedForecastHourlyListItem[],
  fallbackDate: string,
): ForecastTimePeriodListItem => {
  const averages = calculateForecastHourlyListAverages(hourlyItems);

  return {
    timePeriod: timePeriodKey,
    time: hourlyItems[0]?.time || fallbackDate,
    ...averages,
  };
};
