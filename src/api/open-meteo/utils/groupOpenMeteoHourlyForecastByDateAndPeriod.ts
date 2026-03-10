import type { NormalizedOpenMeteoForecastHourlyListItem } from "../types";

export const groupOpenMeteoHourlyForecastByDateAndPeriod = <T extends string>(
  hourlyList: NormalizedOpenMeteoForecastHourlyListItem[],
  getPeriodFn: (time: string) => T,
  periodMap: Record<string, T>,
) => {
  const grouped: Record<
    string,
    Record<T, NormalizedOpenMeteoForecastHourlyListItem[]>
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
        {} as Record<T, NormalizedOpenMeteoForecastHourlyListItem[]>,
      );
    }

    grouped[dateKey][timePeriod].push(hourlyListItem);
  });

  return grouped;
};
