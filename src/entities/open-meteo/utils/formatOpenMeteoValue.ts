import { format as formatDate } from "date-fns";
import { conversions } from "@/utils";
import { type OpenMeteoNumberVar } from "../types";

export const formatOpenMeteoValue = {
  /**
   * Time
   */

  hourlyTime: (time: string): string => {
    return formatDate(new Date(time), "ha");
  },

  /**
   * Precipitation
   */

  precipitation: (mm: OpenMeteoNumberVar): string => {
    if (mm === null || mm === undefined || mm === 0) return "0mm";

    if (mm >= 10) {
      return `${conversions.mmToCm(mm).toFixed(1)}cm`;
    }

    return `${mm}mm`;
  },

  precipitationProbability: (percent: OpenMeteoNumberVar): string => {
    if (percent === null || percent === undefined || percent === 0) return "0%";
    return `${percent}%`;
  },
  
  /**
   * Temperature
   */

  temperature: (value: OpenMeteoNumberVar): string => {
    if (value === null || value === undefined) return "--°";
    return `${Math.round(value)}°`;
  },

  apparentTemperature: (value: OpenMeteoNumberVar): string => {
    return `Feels ${value || 0}`;
  },
};
