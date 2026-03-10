import type { DailyForecastMap, HourlyForecastRecord } from "../types";

export const groupHourlyForecastByDateAndPeriod = <T extends string>(
  hourlyCollection: HourlyForecastRecord[],
  getPeriodFn: (time: string) => T,
  periodMap: Record<string, T>,
): DailyForecastMap => {
  const grouped: Record<string, Record<T, HourlyForecastRecord[]>> = {};
  const periodValues = Object.values(periodMap);

  hourlyCollection.forEach((record) => {
    const dateKey = record.time.split("T")[0];
    const timePeriod = getPeriodFn(record.time);

    if (!grouped[dateKey]) {
      grouped[dateKey] = periodValues.reduce(
        (acc, period) => {
          acc[period] = [];
          return acc;
        },
        {} as Record<T, HourlyForecastRecord[]>,
      );
    }

    grouped[dateKey][timePeriod].push(record);
  });

  return grouped;
};
