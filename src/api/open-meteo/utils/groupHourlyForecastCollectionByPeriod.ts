import type { HourlyForecastRecord, DailyForecastGroup } from "../types";
import { createDailyForecastGroupCollection } from "./createDailyForecastGroupCollection";
import { groupHourlyForecastByDateAndPeriod } from "./groupHourlyForecastCollectionByDateAndPeriod";

export const groupHourlyForecastCollectionByPeriod = (
  hourlyCollection: HourlyForecastRecord[],
  getPeriodFn: (time: string) => string,
  periodMap: Record<string, string>,
): DailyForecastGroup[] => {
  const dailyForecastMap = groupHourlyForecastByDateAndPeriod(
    hourlyCollection,
    getPeriodFn,
    periodMap,
  );
  return createDailyForecastGroupCollection(dailyForecastMap);
};
