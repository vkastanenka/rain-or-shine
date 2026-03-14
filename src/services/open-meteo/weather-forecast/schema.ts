import { z } from "zod";
import { wmoCodeSchema } from "@/entities";
import { FORECAST_INTERVAL_MAP, FORECAST_INTERVAL_UNIT_MAP } from "./constants";
import { transformValuesShapeToUnitsShape } from "./utils";

/**
 * Shared
 */

export const isDayValueSchema = z.union([z.literal(0), z.literal(1)]);

/**
 * Current
 */

export const CurrentValuesSchema = z.object({
  time: z.array(z.string()),
  apparent_temperature: z.array(z.number()).optional(),
  cloud_cover: z.array(z.number()).optional(),
  interval: z.array(z.number()).optional(),
  is_day: z.array(isDayValueSchema).optional(),
  precipitation: z.array(z.number()).optional(),
  pressure_msl: z.array(z.number()).optional(),
  rain: z.array(z.number()).optional(),
  relative_humidity_2m: z.array(z.number()).optional(),
  showers: z.array(z.number()).optional(),
  snowfall: z.array(z.number()).optional(),
  surface_pressure: z.array(z.number()).optional(),
  temperature_2m: z.array(z.number()).optional(),
  weather_code: z.array(wmoCodeSchema).optional(),
  wind_direction_10m: z.array(z.number()).optional(),
  wind_gusts_10m: z.array(z.number()).optional(),
  wind_speed_10m: z.array(z.number()).optional(),
});

export const CurrentValuesUnitsSchema = z.object(
  transformValuesShapeToUnitsShape(CurrentValuesSchema.shape),
);

/**
 * Daily
 */

export const DailyValuesSchema = z.object({
  time: z.array(z.string()),
  apparent_temperature_max: z.array(z.number()).optional(),
  apparent_temperature_mean: z.array(z.number()).optional(),
  apparent_temperature_min: z.array(z.number()).optional(),
  cape_max: z.array(z.number()).optional(),
  cape_mean: z.array(z.number()).optional(),
  cape_min: z.array(z.number()).optional(),
  cloud_cover_max: z.array(z.number()).optional(),
  cloud_cover_mean: z.array(z.number()).optional(),
  cloud_cover_min: z.array(z.number()).optional(),
  daylight_duration: z.array(z.number()).optional(),
  dew_point_2m_max: z.array(z.number()).optional(),
  dew_point_2m_mean: z.array(z.number()).optional(),
  dew_point_2m_min: z.array(z.number()).optional(),
  et0_fao_evapotranspiration_sum: z.array(z.number()).optional(),
  et0_fao_evapotranspiration: z.array(z.number()).optional(),
  growing_degree_days_base_0_limit_50: z.array(z.number()).optional(),
  leaf_wetness_probability_mean: z.array(z.number()).optional(),
  precipitation_hours: z.array(z.number()).optional(),
  precipitation_probability_max: z.array(z.number()).optional(),
  precipitation_probability_mean: z.array(z.number()).optional(),
  precipitation_probability_min: z.array(z.number()).optional(),
  precipitation_sum: z.array(z.number()).optional(),
  pressure_msl_max: z.array(z.number()).optional(),
  pressure_msl_mean: z.array(z.number()).optional(),
  pressure_msl_min: z.array(z.number()).optional(),
  rain_sum: z.array(z.number()).optional(),
  relative_humidity_2m_max: z.array(z.number()).optional(),
  relative_humidity_2m_mean: z.array(z.number()).optional(),
  relative_humidity_2m_min: z.array(z.number()).optional(),
  shortwave_radiation_sum: z.array(z.number()).optional(),
  showers_sum: z.array(z.number()).optional(),
  snowfall_sum: z.array(z.number()).optional(),
  snowfall_water_equivalent_sum: z.array(z.number()).optional(),
  sunrise: z.array(z.string()).optional(),
  sunset: z.array(z.string()).optional(),
  sunshine_duration: z.array(z.number()).optional(),
  surface_pressure_max: z.array(z.number()).optional(),
  surface_pressure_mean: z.array(z.number()).optional(),
  surface_pressure_min: z.array(z.number()).optional(),
  temperature_2m_max: z.array(z.number()).optional(),
  temperature_2m_mean: z.array(z.number()).optional(),
  temperature_2m_min: z.array(z.number()).optional(),
  updraft_max: z.array(z.number()).optional(),
  uv_index_clear_sky_max: z.array(z.number()).optional(),
  uv_index_max: z.array(z.number()).optional(),
  vapour_pressure_deficit_max: z.array(z.number()).optional(),
  visibility_max: z.array(z.number()).optional(),
  visibility_mean: z.array(z.number()).optional(),
  visibility_min: z.array(z.number()).optional(),
  weather_code: z.array(wmoCodeSchema).optional(),
  wet_bulb_temperature_2m_max: z.array(z.number()).optional(),
  wet_bulb_temperature_2m_mean: z.array(z.number()).optional(),
  wet_bulb_temperature_2m_min: z.array(z.number()).optional(),
  wind_direction_10m_dominant: z.array(z.number()).optional(),
  wind_gusts_10m_max: z.array(z.number()).optional(),
  wind_gusts_10m_mean: z.array(z.number()).optional(),
  wind_gusts_10m_min: z.array(z.number()).optional(),
  wind_speed_10m_max: z.array(z.number()).optional(),
  wind_speed_10m_mean: z.array(z.number()).optional(),
  wind_speed_10m_min: z.array(z.number()).optional(),
});

export const DailyValuesUnitsSchema = z.object(
  transformValuesShapeToUnitsShape(DailyValuesSchema.shape),
);

/**
 * Hourly
 */

export const HourlyValuesSchema = z.object({
  time: z.array(z.string()),
  apparent_temperature: z.array(z.number()).optional(),
  boundary_layer_height: z.array(z.number()).optional(),
  cape: z.array(z.number()).optional(),
  cloud_cover_high: z.array(z.number()).optional(),
  cloud_cover_low: z.array(z.number()).optional(),
  cloud_cover_mid: z.array(z.number()).optional(),
  cloud_cover: z.array(z.number()).optional(),
  convective_inhibition: z.array(z.number()).optional(),
  dew_point_2m: z.array(z.number()).optional(),
  diffuse_radiation_instant: z.array(z.number()).optional(),
  diffuse_radiation: z.array(z.number()).optional(),
  direct_normal_irradiance_instant: z.array(z.number()).optional(),
  direct_normal_irradiance: z.array(z.number()).optional(),
  direct_radiation_instant: z.array(z.number()).optional(),
  direct_radiation: z.array(z.number()).optional(),
  et0_fao_evapotranspiration: z.array(z.number()).optional(),
  evapotranspiration: z.array(z.number()).optional(),
  freezing_level_height: z.array(z.number()).optional(),
  global_tilted_irradiance_instant: z.array(z.number()).optional(),
  global_tilted_irradiance: z.array(z.number()).optional(),
  is_day: z.array(isDayValueSchema).optional(),
  lifted_index: z.array(z.number()).optional(),
  precipitation: z.array(z.number()).optional(),
  precipitation_probability: z.array(z.number()).optional(),
  pressure_msl: z.array(z.number()).optional(),
  rain: z.array(z.number()).optional(),
  relative_humidity_2m: z.array(z.number()).optional(),
  shortwave_radiation_instant: z.array(z.number()).optional(),
  shortwave_radiation: z.array(z.number()).optional(),
  showers: z.array(z.number()).optional(),
  snow_depth: z.array(z.number()).optional(),
  snowfall: z.array(z.number()).optional(),
  soil_moisture_0_to_1cm: z.array(z.number()).optional(),
  soil_moisture_1_to_3cm: z.array(z.number()).optional(),
  soil_moisture_27_to_81cm: z.array(z.number()).optional(),
  soil_moisture_3_to_9cm: z.array(z.number()).optional(),
  soil_moisture_9_to_27cm: z.array(z.number()).optional(),
  soil_temperature_0cm: z.array(z.number()).optional(),
  soil_temperature_18cm: z.array(z.number()).optional(),
  soil_temperature_54cm: z.array(z.number()).optional(),
  soil_temperature_6cm: z.array(z.number()).optional(),
  sunshine_duration: z.array(z.number()).optional(),
  surface_pressure: z.array(z.number()).optional(),
  temperature_120m: z.array(z.number()).optional(),
  temperature_180m: z.array(z.number()).optional(),
  temperature_2m: z.array(z.number()).optional(),
  temperature_80m: z.array(z.number()).optional(),
  terrestrial_radiation_instant: z.array(z.number()).optional(),
  terrestrial_radiation: z.array(z.number()).optional(),
  total_column_integrated_water_vapour: z.array(z.number()).optional(),
  uv_index_clear_sky: z.array(z.number()).optional(),
  uv_index: z.array(z.number()).optional(),
  vapour_pressure_deficit: z.array(z.number()).optional(),
  visibility: z.array(z.number()).optional(),
  weather_code: z.array(wmoCodeSchema).optional(),
  wet_bulb_temperature_2m: z.array(z.number()).optional(),
  wind_direction_10m: z.array(z.number()).optional(),
  wind_direction_120m: z.array(z.number()).optional(),
  wind_direction_180m: z.array(z.number()).optional(),
  wind_direction_80m: z.array(z.number()).optional(),
  wind_gusts_10m: z.array(z.number()).optional(),
  wind_speed_10m: z.array(z.number()).optional(),
  wind_speed_120m: z.array(z.number()).optional(),
  wind_speed_180m: z.array(z.number()).optional(),
  wind_speed_80m: z.array(z.number()).optional(),
});

export const HourlyValuesUnitsSchema = z.object(
  transformValuesShapeToUnitsShape(HourlyValuesSchema.shape),
);

/**
 * Minutely 15
 */

export const Minutely15ValuesSchema = z.object({
  time: z.array(z.string()),
  apparent_temperature: z.array(z.number()).optional(),
  cape: z.array(z.number()).optional(),
  dew_point_2m: z.array(z.number()).optional(),
  diffuse_radiation_instant: z.array(z.number()).optional(),
  diffuse_radiation: z.array(z.number()).optional(),
  direct_normal_irradiance_instant: z.array(z.number()).optional(),
  direct_normal_irradiance: z.array(z.number()).optional(),
  direct_radiation_instant: z.array(z.number()).optional(),
  direct_radiation: z.array(z.number()).optional(),
  freezing_level_height: z.array(z.number()).optional(),
  global_tilted_irradiance_instant: z.array(z.number()).optional(),
  global_tilted_irradiance: z.array(z.number()).optional(),
  is_day: z.array(isDayValueSchema).optional(),
  lightning_potential_index: z.array(z.number()).optional(),
  precipitation: z.array(z.number()).optional(),
  rain: z.array(z.number()).optional(),
  relative_humidity_2m: z.array(z.number()).optional(),
  shortwave_radiation_instant: z.array(z.number()).optional(),
  shortwave_radiation: z.array(z.number()).optional(),
  snowfall_height: z.array(z.number()).optional(),
  snowfall: z.array(z.number()).optional(),
  sunshine_duration: z.array(z.number()).optional(),
  temperature_2m: z.array(z.number()).optional(),
  terrestrial_radiation_instant: z.array(z.number()).optional(),
  terrestrial_radiation: z.array(z.number()).optional(),
  visibility: z.array(z.number()).optional(),
  weather_code: z.array(wmoCodeSchema).optional(),
  wind_direction_10m: z.array(z.number()).optional(),
  wind_direction_80m: z.array(z.number()).optional(),
  wind_gusts_10m: z.array(z.number()).optional(),
  wind_speed_10m: z.array(z.number()).optional(),
  wind_speed_80m: z.array(z.number()).optional(),
});

export const Minutely15ValuesUnitsSchema = z.object(
  transformValuesShapeToUnitsShape(Minutely15ValuesSchema.shape),
);

/**
 * Api Res Data
 */

export const ForecastSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),

  // Time Interval Data
  [FORECAST_INTERVAL_MAP.Current]: CurrentValuesSchema,
  [FORECAST_INTERVAL_MAP.Daily]: DailyValuesSchema,
  [FORECAST_INTERVAL_MAP.Hourly]: HourlyValuesSchema,
  [FORECAST_INTERVAL_MAP.Minutely15]: Minutely15ValuesSchema,

  // Time Interval Units
  [FORECAST_INTERVAL_UNIT_MAP.Current]: CurrentValuesUnitsSchema,
  [FORECAST_INTERVAL_UNIT_MAP.Daily]: DailyValuesUnitsSchema,
  [FORECAST_INTERVAL_UNIT_MAP.Hourly]: HourlyValuesUnitsSchema,
  [FORECAST_INTERVAL_UNIT_MAP.Minutely15]: Minutely15ValuesUnitsSchema,
});
