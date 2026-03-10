import type { DailyForecastGroup, HourlyForecastRecord } from "../types";

export const createHourlyForecastCollection = (
  dailyForecastGroupCollection: DailyForecastGroup[],
): HourlyForecastRecord[] => {
  return dailyForecastGroupCollection.flatMap(
    (group) => group.collection ?? [],
  );
};
