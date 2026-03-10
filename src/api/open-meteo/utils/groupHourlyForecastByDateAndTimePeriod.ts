import type { NormalizedForecastHourlyListItem } from "../types";

export const groupHourlyForecastByDateAndTimePeriod = <T extends string>(
  hourlyList: NormalizedForecastHourlyListItem[],
  getPeriodFn: (time: string) => T,
  periodMap: Record<string, T>,
) => {
  const grouped: Record<
    string,
    Record<T, NormalizedForecastHourlyListItem[]>
  > = {};
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
        {} as Record<T, NormalizedForecastHourlyListItem[]>,
      );
    }

    grouped[dateKey][timePeriod].push(hourlyListItem);
  });

  return grouped;
};
