import { FORECAST_DIURNAL_PERIOD_MAP } from "../constants";
import { type ForecastDiurnalPeriodMapValue } from "../types";

export const getDiurnalPeriodFromDate = (
  date: string,
): ForecastDiurnalPeriodMapValue => {
  const hour = new Date(date).getHours();

  const isDaytime = hour >= 6 && hour < 18;

  return isDaytime
    ? FORECAST_DIURNAL_PERIOD_MAP.Day
    : FORECAST_DIURNAL_PERIOD_MAP.Night;
};
