import type { NormalizedOpenMeteoForecastHourlyListItem } from "../types";

export const groupOpenMeteoHourlyForecastByDate = (
  hourlyList: NormalizedOpenMeteoForecastHourlyListItem[],
) => {
  const dateMap: Record<string, boolean> = {};
  const grouped: {
    date: string;
    list: NormalizedOpenMeteoForecastHourlyListItem[];
  }[] = [];

  hourlyList.forEach((hourlyListItem) => {
    const dateKey = hourlyListItem.time.split("T")[0];

    if (!dateMap[dateKey]) {
      dateMap[dateKey] = true;
      grouped.push({ date: dateKey, list: [hourlyListItem] });
    }

    grouped[grouped.length - 1].list.push(hourlyListItem);
  });

  return grouped;
};
