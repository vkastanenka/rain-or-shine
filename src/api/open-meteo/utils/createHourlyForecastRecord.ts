import { calculateHourlyForecastCollectionAverages } from "./calculations/calculateHourlyForecastCollectionAverages";
import type { HourlyForecastRecord } from "../types";

export const createHourlyForecastRecord = (
  periodKey: string,
  hourlyCollection: HourlyForecastRecord[],
  fallbackDate: string,
): HourlyForecastRecord => {
  const averages = calculateHourlyForecastCollectionAverages(hourlyCollection);

  return {
    period: periodKey,
    time: hourlyCollection[0]?.time || fallbackDate,
    ...averages,
  };
};
