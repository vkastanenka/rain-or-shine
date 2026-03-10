import { calculateForecastHourlyListAverages } from "./calculations/calculateForecastHourlyListAverages";
import type { HourlyForecastRecord, HourlyForecastPeriodItem } from "../types";

export const createForecastTimePeriodListItem = (
  timePeriodKey: string,
  hourlyItems: HourlyForecastRecord[],
  fallbackDate: string,
): HourlyForecastPeriodItem => {
  const averages = calculateForecastHourlyListAverages(hourlyItems);

  return {
    timePeriod: timePeriodKey,
    time: hourlyItems[0]?.time || fallbackDate,
    ...averages,
  };
};
