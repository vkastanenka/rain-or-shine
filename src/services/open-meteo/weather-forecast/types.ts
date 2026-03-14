import { z } from "zod";
import { type MapValue } from "@/types";
import { API_CONFIG } from "./constants";
import { FORECAST_INTERVAL_MAP, FORECAST_INTERVAL_UNIT_MAP } from "./constants";
import {
  CurrentValuesSchema,
  CurrentValuesUnitsSchema,
  DailyValuesSchema,
  DailyValuesUnitsSchema,
  ForecastSchema,
  HourlyValuesSchema,
  HourlyValuesUnitsSchema,
  Minutely15ValuesSchema,
  Minutely15ValuesUnitsSchema,
} from "./schema";

/**
 * Utils
 */

export type ForecastValue<T> = Exclude<T, "time">;

/**
 * Api Config
 */

export type V1ApiConfig = typeof API_CONFIG.V1;

/**
 * Intervals
 */

export type ForecastIntervalMapValue = MapValue<typeof FORECAST_INTERVAL_MAP>;
export type ForecastIntervalUnitMapValue = MapValue<
  typeof FORECAST_INTERVAL_UNIT_MAP
>;

/**
 * Current Values
 */

export type CurrentValues = z.infer<typeof CurrentValuesSchema>;
export type CurrentValuesUnits = z.infer<typeof CurrentValuesUnitsSchema>;
export type CurrentValuesKey = keyof CurrentValues;
export type CurrentValue = ForecastValue<CurrentValuesKey>;

/**
 * Daily Values
 */

export type DailyValues = z.infer<typeof DailyValuesSchema>;
export type DailyValuesUnits = z.infer<typeof DailyValuesUnitsSchema>;
export type DailyValuesKey = keyof DailyValues;
export type DailyValue = ForecastValue<DailyValuesKey>;

/**
 * Hourly Values
 */

export type HourlyValues = z.infer<typeof HourlyValuesSchema>;
export type HourlyValuesUnits = z.infer<typeof HourlyValuesUnitsSchema>;
export type HourlyValuesKey = keyof HourlyValues;
export type HourlyValue = ForecastValue<HourlyValuesKey>;

/**
 * Minutely 15 Values
 */

export type Minutely15Values = z.infer<typeof Minutely15ValuesSchema>;
export type Minutely15ValuesUnits = z.infer<typeof Minutely15ValuesUnitsSchema>;
export type Minutely15ValuesKey = keyof Minutely15Values;
export type Minutely15Value = ForecastValue<Minutely15ValuesKey>;

/**
 * Api Req Params
 */

export interface GetForecastByCoordsParams {
  latitude: number;
  longitude: number;
  elevation?: number;
  [FORECAST_INTERVAL_MAP.Hourly]?: HourlyValue[];
  [FORECAST_INTERVAL_MAP.Daily]?: DailyValue[];
  [FORECAST_INTERVAL_MAP.Current]?: CurrentValue[];
  [FORECAST_INTERVAL_MAP.Minutely15]?: Minutely15Value[];
  temperature_unit?: "celsius" | "fahrenheit";
  wind_speed_unit?: "kmh" | "ms" | "mph" | "kn";
  precipitation_unit?: "mm" | "inch";
  timeformat?: string;
  timezone?: string;
  past_days?: string; // 0 - 92
  forecast_days?: string; // 0 - 16
  forecast_hours?: string; // >0
  forecast_minutely_15?: string; // >0
  past_hours?: string; // >0
  past_minutely_15?: string; // >0
  start_date?: string; // yyyy-mm-dd
  end_date?: string; // yyyy-mm-dd
  start_hour?: string; // yyyy-mm-ddThh:mm
  end_hour?: string; // yyyy-mm-ddThh:mm
  start_minutely_15?: string; // yyyy-mm-ddThh:mm
  end_minutely_15?: string; // yyyy-mm-ddThh:mm
  models?: string[];
  cell_selection?: string;
}

/**
 * Api Res Data
 */

export type Forecast = z.infer<typeof ForecastSchema>;
