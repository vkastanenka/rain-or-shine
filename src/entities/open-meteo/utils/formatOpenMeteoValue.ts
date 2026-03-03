import { format as formatDate } from "date-fns";
import { MEASUREMENT_LABELS_MAP } from "@/constants";
import {
  getDailyTimePeriodFromDate,
  FORECAST_LABELS_MAP,
  FORECAST_DIURNAL_PERIOD_MAP,
  FORECAST_TIME_PERIOD_LABELS_MAP,
  type ForecastTimePeriodLabelsMapValue,
  type ForecastDiurnalPeriodMapValue,
} from "@/features";
import { conversions } from "@/utils";
import { type OpenMeteoNumberVar } from "../types";

export const formatOpenMeteoValue = {
  /**
   * Time
   */

  dayOfWeek: (date: string): string => {
    return formatDate(new Date(date), "EEE");
  },

  dailyTimePeriod: (date: string): ForecastTimePeriodLabelsMapValue => {
    const timePeriod = getDailyTimePeriodFromDate(date);
    return FORECAST_TIME_PERIOD_LABELS_MAP[timePeriod];
  },

  monthWithDay: (date: string): string => {
    return formatDate(new Date(date), "MMM d");
  },

  hourlyTime: (time: string): string => {
    return formatDate(new Date(time), "ha");
  },

  /**
   * Precipitation
   */

  precipitation: (mm: OpenMeteoNumberVar): string => {
    if (mm === null || mm === undefined || mm === 0)
      return `0${MEASUREMENT_LABELS_MAP.mm}`;

    if (mm >= 10) {
      return `${conversions.mmToCm(mm).toFixed(1)}${MEASUREMENT_LABELS_MAP.cm}`;
    }

    return `${mm}${MEASUREMENT_LABELS_MAP.mm}`;
  },

  precipitationProbability: (percent: OpenMeteoNumberVar): string => {
    if (percent === null || percent === undefined || percent === 0)
      return `0${MEASUREMENT_LABELS_MAP["%"]}`;
    return `${percent}${MEASUREMENT_LABELS_MAP["%"]}`;
  },

  /**
   * Temperature
   */

  temperature: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined)
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}`;
    return `${Math.round(value)}${MEASUREMENT_LABELS_MAP["°"]}`;
  },

  apparentTemperature: (value: OpenMeteoNumberVar): string => {
    return `${FORECAST_LABELS_MAP.feels} ${value || 0}`;
  },

  diurnalPeriodApparentTemperature: (
    diurnalPeriod: ForecastDiurnalPeriodMapValue = FORECAST_DIURNAL_PERIOD_MAP.Day,
    value: OpenMeteoNumberVar = 0,
  ): string => {
    return `${FORECAST_LABELS_MAP[diurnalPeriod]} ${value || 0}${MEASUREMENT_LABELS_MAP["°"]}`;
  },
};
