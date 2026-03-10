import { format as formatDate } from "date-fns";
import { MEASUREMENT_LABELS_MAP } from "@/constants";
import {
  getDailyTimePeriodFromDate,
  FORECAST_LABELS_MAP,
  FORECAST_TIME_PERIOD_LABELS_MAP,
  type ForecastTimePeriodLabelsMapValue,
  type ForecastDiurnalPeriodMapValue,
} from "@/features";
import { conversions } from "@/utils";
import { WMO_CODES_MAP } from "@/entities/wmo";
import {
  type OpenMeteoNumberVar,
  type OpenMeteoStringVar,
  type OpenMeteoWmoVar,
} from "../entities/open-meteo/types";

export const formatOpenMeteoValue = {
  /**
   * Condition
   */

  conditionDescription: (weatherCode: OpenMeteoWmoVar): string => {
    if (weatherCode === null || weatherCode === undefined) {
      return MEASUREMENT_LABELS_MAP.emptyValue;
    }
    return WMO_CODES_MAP[weatherCode];
  },

  /**
   * Direction
   */

  cardinalDirection: (degree: OpenMeteoNumberVar): string => {
    if (degree === null || degree === undefined) {
      return MEASUREMENT_LABELS_MAP.emptyValue;
    }

    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    // Divide by 45 degrees, round to nearest integer,
    // and use modulo 8 to wrap 360 back to 0 (North).
    const index = Math.round(degree / 45) % 8;

    return directions[index];
  },

  /**
   * Speed
   */

  /**
   * Wind
   */

  windSpeed: (speed: OpenMeteoNumberVar): string => {
    if (speed === null || speed === undefined) {
      return MEASUREMENT_LABELS_MAP.emptyValue;
    }
    return `${Math.round(speed)} ${MEASUREMENT_LABELS_MAP["km/h"]}`;
  },

  gustSpeed: (speed: OpenMeteoNumberVar): string => {
    if (speed === null || speed === undefined) {
      return MEASUREMENT_LABELS_MAP.emptyValue;
    }
    return `${FORECAST_LABELS_MAP.gustLabel} ${Math.round(speed)} ${MEASUREMENT_LABELS_MAP["km/h"]}`;
  },

  /**
   * Time
   */

  fullDate: (date: string): string => {
    if (!date) return MEASUREMENT_LABELS_MAP.emptyValue;
    return formatDate(new Date(date), "MMMM d, yyyy");
  },

  fullTime: (date: OpenMeteoStringVar): string => {
    if (!date) return MEASUREMENT_LABELS_MAP.emptyValue;
    return formatDate(new Date(date), "h:mmaa");
  },

  dayOfWeek: (date: string): string => {
    return formatDate(new Date(date), "EEE");
  },

  dayOfWeekMonthDay: (date: string): string => {
    return formatDate(new Date(date), "E MMM d");
  },

  hourMarker: (date: string): string => {
    return formatDate(new Date(date), "ha").toLowerCase();
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

  dayTimeProgress: (sunrise: string, sunset: string): number => {
    const start = new Date(sunrise).getTime();
    const end = new Date(sunset).getTime();
    const now = new Date().getTime();

    // Calculate percentage: (current - start) / (end - start) * 100
    const totalDaylight = end - start;
    const elapsed = now - start;

    const progress = Math.min(
      Math.max((elapsed / totalDaylight) * 100, 0),
      100,
    );

    return progress;
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
    return `${Math.round(percent)}${MEASUREMENT_LABELS_MAP["%"]}`;
  },

  /**
   * Temperature
   */

  temperature: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined)
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}`;
    return `${Math.round(value)}${MEASUREMENT_LABELS_MAP["°"]}`;
  },

  temperatureWithUnit: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined) {
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}${MEASUREMENT_LABELS_MAP.c}`;
    }
    return `${Math.round(value)}${MEASUREMENT_LABELS_MAP["°"]}${MEASUREMENT_LABELS_MAP.c}`;
  },

  highTemperature: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined) {
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}`;
    }
    return `${FORECAST_LABELS_MAP.hLabel} ${Math.round(value)}${MEASUREMENT_LABELS_MAP["°"]}`;
  },

  lowTemperature: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined) {
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}`;
    }
    return `${FORECAST_LABELS_MAP.lLabel} ${Math.round(value)}${MEASUREMENT_LABELS_MAP["°"]}`;
  },

  apparentTemperature: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined)
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}`;
    return `${FORECAST_LABELS_MAP.feels} ${Math.round(value)}`;
  },

  diurnalPeriodApparentTemperature: (
    diurnalPeriod: ForecastDiurnalPeriodMapValue,
    value: OpenMeteoNumberVar = 0,
  ): string => {
    if (!diurnalPeriod || value === null || value === undefined)
      return `${MEASUREMENT_LABELS_MAP.emptyValue}${MEASUREMENT_LABELS_MAP["°"]}`;
    return `${FORECAST_LABELS_MAP[diurnalPeriod]} ${Math.round(value)}${MEASUREMENT_LABELS_MAP["°"]}`;
  },

  /**
   * Pressure
   */

  pressure: (pressure: number): string => {
    return `${pressure.toFixed(1)} kPa`;
  },

  /**
   * Humidity
   */

  humidity: (humidity: number): string => {
    return `${humidity}%`;
  },
};
