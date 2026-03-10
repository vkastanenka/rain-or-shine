import type { NormalizedForecastHourlyListItem } from "../types";

export const groupHourlyForecastByDate = (
  hourlyList: NormalizedForecastHourlyListItem[],
) => {
  const dateMap: Record<string, boolean> = {};
  const grouped: {
    date: string;
    list: NormalizedForecastHourlyListItem[];
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
