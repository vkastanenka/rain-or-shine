import type { HourlyForecastRecord } from "../../types";

export const calculateForecastHourlyListAverages = (
  hourlyList: HourlyForecastRecord[],
): Record<string, number> => {
  const count = hourlyList.length;
  if (count === 0) return {};

  // Summation
  const totals = hourlyList.reduce(
    (acc, curr) => {
      Object.entries(curr).forEach(([key, value]) => {
        if (typeof value !== "number") return;

        if (key === "weather_code") {
          if (acc[key] === undefined || value > acc[key]) {
            acc[key] = value;
          }
        } else if (key !== "time") {
          acc[key] = (acc[key] || 0) + value;
        }
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  // Division
  const averages = Object.entries(totals).reduce(
    (acc, [key, val]) => {
      acc[key] =
        key === "weather_code" ? val : Number((val / count).toFixed(2));
      return acc;
    },
    {} as Record<string, number>,
  );

  return averages;
};
