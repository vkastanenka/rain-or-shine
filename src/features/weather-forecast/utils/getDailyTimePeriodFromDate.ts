import { FORECAST_TIME_PERIOD_MAP } from "../constants";
import { type ForecastTimePeriodMapValue } from "../types";

export const getDailyTimePeriodFromDate = (
  date: string,
): ForecastTimePeriodMapValue => {
  const hour = new Date(date).getHours();

  const periods = [
    FORECAST_TIME_PERIOD_MAP.Overnight, // 0-5
    FORECAST_TIME_PERIOD_MAP.Morning, // 6-11
    FORECAST_TIME_PERIOD_MAP.Afternoon, // 12-17
    FORECAST_TIME_PERIOD_MAP.Evening, // 18-23
  ] as const;

  const timePeriod = periods[Math.floor(hour / 6)];
  return timePeriod;
};
