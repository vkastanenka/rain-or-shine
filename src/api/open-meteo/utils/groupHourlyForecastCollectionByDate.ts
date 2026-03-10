import type { DailyForecastGroup, HourlyForecastRecord } from "../types";

export const groupHourlyForecastCollectionByDate = (
  hourlyCollection: HourlyForecastRecord[],
): DailyForecastGroup[] => {
  const dateMap: Record<string, boolean> = {};
  const grouped: {
    date: string;
    collection: HourlyForecastRecord[];
  }[] = [];

  hourlyCollection.forEach((record) => {
    const dateKey = record.time.split("T")[0];

    if (!dateMap[dateKey]) {
      dateMap[dateKey] = true;
      grouped.push({ date: dateKey, collection: [record] });
      return;
    }

    grouped[grouped.length - 1].collection.push(record);
  });

  return grouped;
};
