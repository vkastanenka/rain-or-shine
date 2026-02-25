import { type WmoCodesMapKey } from "@/entities/wmo";
import {
  OPEN_METEO_TIME_INTERVAL_MAP,
  OPEN_METEO_TIME_INTERVAL_UNIT_MAP,
} from "../constants";
import {
  type OpenMeteoIsDayValue,
  type OpenMeteoForecastVariablesUnits,
} from "./base";

/**
 * Current Variables
 */

export interface OpenMeteoForecastCurrentVariables {
  time: string;
  apparent_temperature?: number | null;
  cloud_cover?: number | null;
  interval?: number | null;
  is_day?: OpenMeteoIsDayValue;
  precipitation?: number | null;
  pressure_msl?: number | null;
  rain?: number | null;
  relative_humidity_2m?: number | null;
  showers?: number | null;
  snowfall?: number | null;
  surface_pressure?: number | null;
  temperature_2m?: number | null;
  weather_code?: WmoCodesMapKey | null;
  wind_direction_10m?: number | null;
  wind_gusts_10m?: number | null;
  wind_speed_10m?: number | null;
}

export type OpenMeteoForecastCurrentVariablesKey =
  keyof OpenMeteoForecastCurrentVariables;

export type OpenMeteoForecastCurrentVariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastCurrentVariables>;

/**
 * Daily Variables
 */

export interface OpenMeteoForecastDailyVariables {
  time: string[];
  apparent_temperature_max?: (number | null)[];
  apparent_temperature_mean?: (number | null)[];
  apparent_temperature_min?: (number | null)[];
  cape_max?: (number | null)[];
  cape_mean?: (number | null)[];
  cape_min?: (number | null)[];
  cloud_cover_max?: (number | null)[];
  cloud_cover_mean?: (number | null)[];
  cloud_cover_min?: (number | null)[];
  daylight_duration?: (number | null)[];
  dew_point_2m_max?: (number | null)[];
  dew_point_2m_mean?: (number | null)[];
  dew_point_2m_min?: (number | null)[];
  et0_fao_evapotranspiration_sum?: (number | null)[];
  et0_fao_evapotranspiration?: (number | null)[];
  growing_degree_days_base_0_limit_50?: (number | null)[];
  leaf_wetness_probability_mean?: (number | null)[];
  precipitation_hours?: (number | null)[];
  precipitation_probability_max?: (number | null)[];
  precipitation_probability_mean?: (number | null)[];
  precipitation_probability_min?: (number | null)[];
  precipitation_sum?: (number | null)[];
  pressure_msl_max?: (number | null)[];
  pressure_msl_mean?: (number | null)[];
  pressure_msl_min?: (number | null)[];
  rain_sum?: (number | null)[];
  relative_humidity_2m_max?: (number | null)[];
  relative_humidity_2m_mean?: (number | null)[];
  relative_humidity_2m_min?: (number | null)[];
  shortwave_radiation_sum?: (number | null)[];
  showers_sum?: (number | null)[];
  snowfall_sum?: (number | null)[];
  snowfall_water_equivalent_sum?: (number | null)[];
  sunrise?: (string | null)[];
  sunset?: (string | null)[];
  sunshine_duration?: (number | null)[];
  surface_pressure_max?: (number | null)[];
  surface_pressure_mean?: (number | null)[];
  surface_pressure_min?: (number | null)[];
  temperature_2m_max?: (number | null)[];
  temperature_2m_mean?: (number | null)[];
  temperature_2m_min?: (number | null)[];
  updraft_max?: (number | null)[];
  uv_index_clear_sky_max?: (number | null)[];
  uv_index_max?: (number | null)[];
  vapour_pressure_deficit_max?: (number | null)[];
  visibility_max?: (number | null)[];
  visibility_mean?: (number | null)[];
  visibility_min?: (number | null)[];
  weather_code?: (WmoCodesMapKey | null)[];
  wet_bulb_temperature_2m_max?: (number | null)[];
  wet_bulb_temperature_2m_mean?: (number | null)[];
  wet_bulb_temperature_2m_min?: (number | null)[];
  wind_direction_10m_dominant?: (number | null)[];
  wind_gusts_10m_max?: (number | null)[];
  wind_gusts_10m_mean?: (number | null)[];
  wind_gusts_10m_min?: (number | null)[];
  wind_speed_10m_max?: (number | null)[];
  wind_speed_10m_mean?: (number | null)[];
  wind_speed_10m_min?: (number | null)[];
}

export type OpenMeteoForecastDailyVariablesKey =
  keyof OpenMeteoForecastDailyVariables;

export type OpenMeteoForecastDailyVariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastDailyVariables>;

/**
 * Hourly Variables
 */

export interface OpenMeteoForecastHourlyVariables {
  time: string[];
  apparent_temperature?: (number | null)[];
  boundary_layer_height?: (number | null)[];
  cape?: (number | null)[];
  cloud_cover_high?: (number | null)[];
  cloud_cover_low?: (number | null)[];
  cloud_cover_mid?: (number | null)[];
  cloud_cover?: (number | null)[];
  convective_inhibition?: (number | null)[];
  dew_point_2m?: (number | null)[];
  diffuse_radiation_instant?: (number | null)[];
  diffuse_radiation?: (number | null)[];
  direct_normal_irradiance_instant?: (number | null)[];
  direct_normal_irradiance?: (number | null)[];
  direct_radiation_instant?: (number | null)[];
  direct_radiation?: (number | null)[];
  et0_fao_evapotranspiration?: (number | null)[];
  evapotranspiration?: (number | null)[];
  freezing_level_height?: (number | null)[];
  global_tilted_irradiance_instant?: (number | null)[];
  global_tilted_irradiance?: (number | null)[];
  is_day?: OpenMeteoIsDayValue[];
  lifted_index?: (number | null)[];
  precipitation?: (number | null)[];
  precipitation_probability?: (number | null)[];
  pressure_msl?: (number | null)[];
  rain?: (number | null)[];
  relative_humidity_2m?: (number | null)[];
  shortwave_radiation_instant?: (number | null)[];
  shortwave_radiation?: (number | null)[];
  showers?: (number | null)[];
  snow_depth?: (number | null)[];
  snowfall?: (number | null)[];
  soil_moisture_0_to_1cm?: (number | null)[];
  soil_moisture_1_to_3cm?: (number | null)[];
  soil_moisture_27_to_81cm?: (number | null)[];
  soil_moisture_3_to_9cm?: (number | null)[];
  soil_moisture_9_to_27cm?: (number | null)[];
  soil_temperature_0cm?: (number | null)[];
  soil_temperature_18cm?: (number | null)[];
  soil_temperature_54cm?: (number | null)[];
  soil_temperature_6cm?: (number | null)[];
  sunshine_duration?: (number | null)[];
  surface_pressure?: (number | null)[];
  temperature_120m?: (number | null)[];
  temperature_180m?: (number | null)[];
  temperature_2m?: (number | null)[];
  temperature_80m?: (number | null)[];
  terrestrial_radiation_instant?: (number | null)[];
  terrestrial_radiation?: (number | null)[];
  total_column_integrated_water_vapour?: (number | null)[];
  uv_index_clear_sky?: (number | null)[];
  uv_index?: (number | null)[];
  vapour_pressure_deficit?: (number | null)[];
  visibility?: (number | null)[];
  weather_code?: (WmoCodesMapKey | null)[];
  wet_bulb_temperature_2m?: (number | null)[];
  wind_direction_10m?: (number | null)[];
  wind_direction_120m?: (number | null)[];
  wind_direction_180m?: (number | null)[];
  wind_direction_80m?: (number | null)[];
  wind_gusts_10m?: (number | null)[];
  wind_speed_10m?: (number | null)[];
  wind_speed_120m?: (number | null)[];
  wind_speed_180m?: (number | null)[];
  wind_speed_80m?: (number | null)[];
}

export type OpenMeteoForecastHourlyVariablesKey =
  keyof OpenMeteoForecastHourlyVariables;

export type OpenMeteoForecastHourlyVariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastHourlyVariables>;

/**
 * Minutely 15 Variables
 */

export interface OpenMeteoForecastMinutely15Variables {
  time: string[];
  apparent_temperature?: (number | null)[];
  cape?: (number | null)[];
  dew_point_2m?: (number | null)[];
  diffuse_radiation_instant?: (number | null)[];
  diffuse_radiation?: (number | null)[];
  direct_normal_irradiance_instant?: (number | null)[];
  direct_normal_irradiance?: (number | null)[];
  direct_radiation_instant?: (number | null)[];
  direct_radiation?: (number | null)[];
  freezing_level_height?: (number | null)[];
  global_tilted_irradiance_instant?: (number | null)[];
  global_tilted_irradiance?: (number | null)[];
  is_day?: OpenMeteoIsDayValue[];
  lightning_potential_index?: (number | null)[];
  precipitation?: (number | null)[];
  rain?: (number | null)[];
  relative_humidity_2m?: (number | null)[];
  shortwave_radiation_instant?: (number | null)[];
  shortwave_radiation?: (number | null)[];
  snowfall_height?: (number | null)[];
  snowfall?: (number | null)[];
  sunshine_duration?: (number | null)[];
  temperature_2m?: (number | null)[];
  terrestrial_radiation_instant?: (number | null)[];
  terrestrial_radiation?: (number | null)[];
  visibility?: (number | null)[];
  weather_code?: (WmoCodesMapKey | null)[];
  wind_direction_10m?: (number | null)[];
  wind_direction_80m?: (number | null)[];
  wind_gusts_10m?: (number | null)[];
  wind_speed_10m?: (number | null)[];
  wind_speed_80m?: (number | null)[];
}

export type OpenMeteoForecastMinutely15VariablesKey =
  keyof OpenMeteoForecastMinutely15Variables;

export type OpenMeteoForecastMinutely15VariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastMinutely15Variables>;

/**
 * Maps
 */

export interface OpenMeteoForecastTimeIntervalVariablesMap {
  [OPEN_METEO_TIME_INTERVAL_MAP.Current]: OpenMeteoForecastCurrentVariables;
  [OPEN_METEO_TIME_INTERVAL_MAP.Daily]: OpenMeteoForecastDailyVariables;
  [OPEN_METEO_TIME_INTERVAL_MAP.Hourly]: OpenMeteoForecastHourlyVariables;
  [OPEN_METEO_TIME_INTERVAL_MAP.Minutely15]: OpenMeteoForecastMinutely15Variables;
}

export interface OpenMeteoForecastTimeIntervalVariablesUnitsMap {
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Current]: OpenMeteoForecastCurrentVariablesUnits;
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Daily]: OpenMeteoForecastDailyVariablesUnits;
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Hourly]: OpenMeteoForecastHourlyVariablesUnits;
  [OPEN_METEO_TIME_INTERVAL_UNIT_MAP.Minutely15]: OpenMeteoForecastMinutely15VariablesUnits;
}
