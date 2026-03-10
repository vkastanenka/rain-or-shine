import type { HourlyForecastRecord } from "../types";

export const groupHourlyForecastByDateAndTimePeriod = <T extends string>(
  hourlyList: HourlyForecastRecord[],
  getPeriodFn: (time: string) => T,
  periodMap: Record<string, T>,
) => {
  const grouped: Record<string, Record<T, HourlyForecastRecord[]>> = {};
  const periodValues = Object.values(periodMap);

  hourlyList.forEach((hourlyListItem) => {
    const dateKey = hourlyListItem.time.split("T")[0];
    const timePeriod = getPeriodFn(hourlyListItem.time);

    if (!grouped[dateKey]) {
      grouped[dateKey] = periodValues.reduce(
        (acc, period) => {
          acc[period] = [];
          return acc;
        },
        {} as Record<T, HourlyForecastRecord[]>,
      );
    }

    grouped[dateKey][timePeriod].push(hourlyListItem);
  });

  return grouped;
};
