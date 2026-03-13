import { z } from "zod";

/**
 * Utils
 */

/**
 * Base Variable Types
 */
export type ForecastIsDayValue = 0 | 1;

export interface ForecastHourlyValues {
  time: string[];
  apparent_temperature?: number[];
  boundary_layer_height?: number[];
  cape?: number[];
  cloud_cover_high?: number[];
  cloud_cover_low?: number[];
  cloud_cover_mid?: number[];
  cloud_cover?: number[];
  convective_inhibition?: number[];
  dew_point_2m?: number[];
  diffuse_radiation_instant?: number[];
  diffuse_radiation?: number[];
  direct_normal_irradiance_instant?: number[];
  direct_normal_irradiance?: number[];
  direct_radiation_instant?: number[];
  direct_radiation?: number[];
  et0_fao_evapotranspiration?: number[];
  evapotranspiration?: number[];
  freezing_level_height?: number[];
  global_tilted_irradiance_instant?: number[];
  global_tilted_irradiance?: number[];
  is_day?: ForecastIsDayValue[];
  lifted_index?: number[];
  precipitation?: number[];
  precipitation_probability?: number[];
  pressure_msl?: number[];
  rain?: number[];
  relative_humidity_2m?: number[];
  shortwave_radiation_instant?: number[];
  shortwave_radiation?: number[];
  showers?: number[];
  snow_depth?: number[];
  snowfall?: number[];
  soil_moisture_0_to_1cm?: number[];
  soil_moisture_1_to_3cm?: number[];
  soil_moisture_27_to_81cm?: number[];
  soil_moisture_3_to_9cm?: number[];
  soil_moisture_9_to_27cm?: number[];
  soil_temperature_0cm?: number[];
  soil_temperature_18cm?: number[];
  soil_temperature_54cm?: number[];
  soil_temperature_6cm?: number[];
  sunshine_duration?: number[];
  surface_pressure?: number[];
  temperature_120m?: number[];
  temperature_180m?: number[];
  temperature_2m?: number[];
  temperature_80m?: number[];
  terrestrial_radiation_instant?: number[];
  terrestrial_radiation?: number[];
  total_column_integrated_water_vapour?: number[];
  uv_index_clear_sky?: number[];
  uv_index?: number[];
  vapour_pressure_deficit?: number[];
  visibility?: number[];
  weather_code?: number[];
  wet_bulb_temperature_2m?: number[];
  wind_direction_10m?: number[];
  wind_direction_120m?: number[];
  wind_direction_180m?: number[];
  wind_direction_80m?: number[];
  wind_gusts_10m?: number[];
  wind_speed_10m?: number[];
  wind_speed_120m?: number[];
  wind_speed_180m?: number[];
  wind_speed_80m?: number[];
}

type ForecastHourlyValue = keyof ForecastHourlyValues;

export type ForecastByCoordsParams = {
  latitude: number;
  longitude: number;
  elevation?: number;
  hourly?: ForecastHourlyValue[];
  daily?: string[];
  current?: string[];
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
};
