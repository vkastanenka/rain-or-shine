import { z } from "zod";
import { transformForecastValuesShapeToUnitsShape } from "./utils";

/**
 * Shared
 */

export const ForecastIsDayValueSchema = z.union([z.literal(0), z.literal(1)]);

/**
 * Current
 */

export const ForecastCurrentValuesSchema = z.object({
  time: z.array(z.string()),
  apparent_temperature: z.array(z.number()).optional(),
  cloud_cover: z.array(z.number()).optional(),
  interval: z.array(z.number()).optional(),
  is_day: ForecastIsDayValueSchema,
  precipitation: z.array(z.number()).optional(),
  pressure_msl: z.array(z.number()).optional(),
  rain: z.array(z.number()).optional(),
  relative_humidity_2m: z.array(z.number()).optional(),
  showers: z.array(z.number()).optional(),
  snowfall: z.array(z.number()).optional(),
  surface_pressure: z.array(z.number()).optional(),
  temperature_2m: z.array(z.number()).optional(),
  weather_code: z.array(z.number()).optional(),
  wind_direction_10m: z.array(z.number()).optional(),
  wind_gusts_10m: z.array(z.number()).optional(),
  wind_speed_10m: z.array(z.number()).optional(),
});

export const ForecastCurrentValuesUnitsSchema = z.object(
  transformForecastValuesShapeToUnitsShape(ForecastCurrentValuesSchema.shape),
);

/**
 * Daily
 */

export const ForecastDailyValuesSchema = z.object({
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
  weather_code: z.array(z.number()).optional(),
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

export const ForecastDailyValuesUnitsSchema = z.object(
  transformForecastValuesShapeToUnitsShape(ForecastDailyValuesSchema.shape),
);

/**
 * Hourly
 */

export const ForecastHourlyValuesSchema = z.object({
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
  is_day: ForecastIsDayValueSchema,
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
  weather_code: z.array(z.number()).optional(),
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

export const ForecastHourlyValuesUnitsSchema = z.object(
  transformForecastValuesShapeToUnitsShape(ForecastHourlyValuesSchema.shape),
);

/**
 * Minutely 15
 */

export const ForecastMinutely15ValuesSchema = z.object({
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
  is_day: ForecastIsDayValueSchema,
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
  weather_code: z.array(z.number()).optional(),
  wind_direction_10m: z.array(z.number()).optional(),
  wind_direction_80m: z.array(z.number()).optional(),
  wind_gusts_10m: z.array(z.number()).optional(),
  wind_speed_10m: z.array(z.number()).optional(),
  wind_speed_80m: z.array(z.number()).optional(),
});

export const ForecastMinutely15ValuesUnitsSchema = z.object(
  transformForecastValuesShapeToUnitsShape(
    ForecastMinutely15ValuesSchema.shape,
  ),
);
