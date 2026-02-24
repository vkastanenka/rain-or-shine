import { type WmoCodesMapKey } from "../wmo";

export type OpenMeteoWeatherForecastIsDayValue = 1 | 0 | null;

export interface OpenMeteoWeatherForecastCurrentVariables {
  time: string;
  apparent_temperature?: number | null;
  cloud_cover?: number | null;
  interval?: number | null;
  is_day?: OpenMeteoWeatherForecastIsDayValue;
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

export type OpenMeteoWeatherForecastCurrentVariablesKey =
  keyof OpenMeteoWeatherForecastCurrentVariables;

export interface OpenMeteoWeatherForecastCurrentVariablesUnits {
  time: string;
  apparent_temperature?: string;
  cloud_cover?: string;
  interval?: string;
  is_day?: string;
  precipitation?: string;
  pressure_msl?: string;
  rain?: string;
  relative_humidity_2m?: string;
  showers?: string;
  snowfall?: string;
  surface_pressure?: string;
  temperature_2m?: string;
  weather_code?: string;
  wind_direction_10m?: string;
  wind_gusts_10m?: string;
  wind_speed_10m?: string;
}

export type OpenMeteoWeatherForecastCurrentVariablesUnitsKey =
  keyof OpenMeteoWeatherForecastCurrentVariablesUnits;

export interface OpenMeteoWeatherForecastDailyVariables {
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
  winddirection_10m_dominant?: (number | null)[];
}

export type OpenMeteoWeatherForecastDailyVariablesKey =
  keyof OpenMeteoWeatherForecastDailyVariables;

export interface OpenMeteoWeatherForecastDailyVariablesUnits {
  time: string;
  apparent_temperature_max?: string;
  apparent_temperature_mean?: string;
  apparent_temperature_min?: string;
  cape_max?: string;
  cape_mean?: string;
  cape_min?: string;
  cloud_cover_max?: string;
  cloud_cover_mean?: string;
  cloud_cover_min?: string;
  daylight_duration?: string;
  dew_point_2m_max?: string;
  dew_point_2m_mean?: string;
  dew_point_2m_min?: string;
  et0_fao_evapotranspiration_sum?: string;
  et0_fao_evapotranspiration?: string;
  growing_degree_days_base_0_limit_50?: string;
  leaf_wetness_probability_mean?: string;
  precipitation_hours?: string;
  precipitation_probability_max?: string;
  precipitation_probability_mean?: string;
  precipitation_probability_min?: string;
  precipitation_sum?: string;
  pressure_msl_max?: string;
  pressure_msl_mean?: string;
  pressure_msl_min?: string;
  rain_sum?: string;
  relative_humidity_2m_max?: string;
  relative_humidity_2m_mean?: string;
  relative_humidity_2m_min?: string;
  shortwave_radiation_sum?: string;
  showers_sum?: string;
  snowfall_sum?: string;
  snowfall_water_equivalent_sum?: string;
  sunrise?: string;
  sunset?: string;
  sunshine_duration?: string;
  surface_pressure_max?: string;
  surface_pressure_mean?: string;
  surface_pressure_min?: string;
  temperature_2m_max?: string;
  temperature_2m_mean?: string;
  temperature_2m_min?: string;
  updraft_max?: string;
  uv_index_clear_sky_max?: string;
  uv_index_max?: string;
  vapour_pressure_deficit_max?: string;
  visibility_max?: string;
  visibility_mean?: string;
  visibility_min?: string;
  weather_code?: string;
  wet_bulb_temperature_2m_max?: string;
  wet_bulb_temperature_2m_mean?: string;
  wet_bulb_temperature_2m_min?: string;
  wind_direction_10m_dominant?: string;
  wind_gusts_10m_max?: string;
  wind_gusts_10m_mean?: string;
  wind_gusts_10m_min?: string;
  wind_speed_10m_max?: string;
  wind_speed_10m_mean?: string;
  wind_speed_10m_min?: string;
  winddirection_10m_dominant?: string;
}

export type OpenMeteoWeatherForecastDailyVariablesUnitsKey =
  keyof OpenMeteoWeatherForecastDailyVariablesUnits;

export interface OpenMeteoWeatherForecastHourlyVariables {
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
  is_day?: OpenMeteoWeatherForecastIsDayValue[];
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

export type OpenMeteoWeatherForecastHourlyVariablesKey =
  keyof OpenMeteoWeatherForecastHourlyVariables;

export interface OpenMeteoWeatherForecastHourlyVariablesUnits {
  time: string;
  apparent_temperature?: string;
  boundary_layer_height?: string;
  cape?: string;
  cloud_cover_high?: string;
  cloud_cover_low?: string;
  cloud_cover_mid?: string;
  cloud_cover?: string;
  convective_inhibition?: string;
  dew_point_2m?: string;
  diffuse_radiation_instant?: string;
  diffuse_radiation?: string;
  direct_normal_irradiance_instant?: string;
  direct_normal_irradiance?: string;
  direct_radiation_instant?: string;
  direct_radiation?: string;
  et0_fao_evapotranspiration?: string;
  evapotranspiration?: string;
  freezing_level_height?: string;
  global_tilted_irradiance_instant?: string;
  global_tilted_irradiance?: string;
  is_day?: string;
  lifted_index?: string;
  precipitation?: string;
  precipitation_probability?: string;
  pressure_msl?: string;
  rain?: string;
  relative_humidity_2m?: string;
  shortwave_radiation_instant?: string;
  shortwave_radiation?: string;
  showers?: string;
  snow_depth?: string;
  snowfall?: string;
  soil_moisture_0_to_1cm?: string;
  soil_moisture_1_to_3cm?: string;
  soil_moisture_27_to_81cm?: string;
  soil_moisture_3_to_9cm?: string;
  soil_moisture_9_to_27cm?: string;
  soil_temperature_0cm?: string;
  soil_temperature_18cm?: string;
  soil_temperature_54cm?: string;
  soil_temperature_6cm?: string;
  sunshine_duration?: string;
  surface_pressure?: string;
  temperature_120m?: string;
  temperature_180m?: string;
  temperature_2m?: string;
  temperature_80m?: string;
  terrestrial_radiation_instant?: string;
  terrestrial_radiation?: string;
  total_column_integrated_water_vapour?: string;
  uv_index_clear_sky?: string;
  uv_index?: string;
  vapour_pressure_deficit?: string;
  visibility?: string;
  weather_code?: string;
  wet_bulb_temperature_2m?: string;
  wind_direction_10m?: string;
  wind_direction_120m?: string;
  wind_direction_180m?: string;
  wind_direction_80m?: string;
  wind_gusts_10m?: string;
  wind_speed_10m?: string;
  wind_speed_120m?: string;
  wind_speed_180m?: string;
  wind_speed_80m?: string;
}

export type OpenMeteoWeatherForecastHourlyVariablesUnitsKey =
  keyof OpenMeteoWeatherForecastHourlyVariablesUnits;

export interface OpenMeteoWeatherForecastMinutely15Variables {
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
  is_day?: OpenMeteoWeatherForecastIsDayValue[];
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

export type OpenMeteoWeatherForecastMinutely15VariablesKey =
  keyof OpenMeteoWeatherForecastMinutely15Variables;

export interface OpenMeteoWeatherForecastMinutely15VariablesUnits {
  time: string;
  apparent_temperature?: string;
  cape?: string;
  dew_point_2m?: string;
  diffuse_radiation_instant?: string;
  diffuse_radiation?: string;
  direct_normal_irradiance_instant?: string;
  direct_normal_irradiance?: string;
  direct_radiation_instant?: string;
  direct_radiation?: string;
  freezing_level_height?: string;
  global_tilted_irradiance_instant?: string;
  global_tilted_irradiance?: string;
  is_day?: string;
  lightning_potential_index?: string;
  precipitation?: string;
  rain?: string;
  relative_humidity_2m?: string;
  shortwave_radiation_instant?: string;
  shortwave_radiation?: string;
  snowfall_height?: string;
  snowfall?: string;
  sunshine_duration?: string;
  temperature_2m?: string;
  terrestrial_radiation_instant?: string;
  terrestrial_radiation?: string;
  visibility?: string;
  weather_code?: string;
  wind_direction_10m?: string;
  wind_direction_80m?: string;
  wind_gusts_10m?: string;
  wind_speed_10m?: string;
  wind_speed_80m?: string;
}

export type OpenMeteoWeatherForecastMinutely15VariablesUnitsKey =
  keyof OpenMeteoWeatherForecastMinutely15VariablesUnits;

export type OpenMeteoWeatherForecastTimeIntervalVariablesKey =
  | "current"
  | "daily"
  | "minutely_15"
  | "hourly";

export type OpenMeteoWeatherForecastTimeIntervalVariablesUnitsKey =
  | "current_units"
  | "daily_units"
  | "minutely_15_units"
  | "hourly_units";

export interface OpenMeteoWeatherForecastTimeIntervalVariablesMap {
  current_units: OpenMeteoWeatherForecastCurrentVariables;
  daily_units: OpenMeteoWeatherForecastDailyVariables;
  hourly_units: OpenMeteoWeatherForecastHourlyVariables;
  minutely_15_units: OpenMeteoWeatherForecastMinutely15Variables;
}

export interface OpenMeteoWeatherForecastTimeIntervalVariablesUnitsMap {
  current: OpenMeteoWeatherForecastCurrentVariablesUnits;
  daily: OpenMeteoWeatherForecastDailyVariablesUnits;
  hourly: OpenMeteoWeatherForecastHourlyVariablesUnits;
  minutely_15: OpenMeteoWeatherForecastMinutely15VariablesUnits;
}

export interface OpenMeteoWeatherForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units?: OpenMeteoWeatherForecastCurrentVariablesUnits;
  daily_units?: OpenMeteoWeatherForecastDailyVariablesUnits;
  hourly_units?: OpenMeteoWeatherForecastHourlyVariablesUnits;
  minutely_15_units?: OpenMeteoWeatherForecastMinutely15VariablesUnits;
  current?: OpenMeteoWeatherForecastCurrentVariables;
  daily?: OpenMeteoWeatherForecastDailyVariables;
  hourly?: OpenMeteoWeatherForecastHourlyVariables;
  minutely_15?: OpenMeteoWeatherForecastMinutely15Variables;
}
