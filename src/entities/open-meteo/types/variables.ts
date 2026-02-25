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
 * Base Variable Types
 */
export type OpenMeteoNumberVar = number | null | undefined;
export type OpenMeteoStringVar = string | null | undefined;
export type OpenMeteoWmoVar = WmoCodesMapKey | null | undefined;
export type OpenMeteoDayVar = OpenMeteoIsDayValue | null | undefined;

/**
 * Shared Type Definitions
 */
export type OpenMeteoTimeVariable = string;
export type OpenMeteoApparentTemperatureVariable = OpenMeteoNumberVar;
export type OpenMeteoCloudCoverVariable = OpenMeteoNumberVar;
export type OpenMeteoPrecipitationVariable = OpenMeteoNumberVar;
export type OpenMeteoPrecipitationProbabilityVariable = OpenMeteoNumberVar;
export type OpenMeteoRainVariable = OpenMeteoNumberVar;
export type OpenMeteoShowersVariable = OpenMeteoNumberVar;
export type OpenMeteoSnowfallVariable = OpenMeteoNumberVar;
export type OpenMeteoTemperatureVariable = OpenMeteoNumberVar;
export type OpenMeteoWeatherCodeVariable = OpenMeteoWmoVar;
export type OpenMeteoWindSpeedVariable = OpenMeteoNumberVar;
export type OpenMeteoWindDirectionVariable = OpenMeteoNumberVar;
export type OpenMeteoWindGustsVariable = OpenMeteoNumberVar;
export type OpenMeteoSurfacePressureVariable = OpenMeteoNumberVar;
export type OpenMeteoPressureMslVariable = OpenMeteoNumberVar;
export type OpenMeteoIsDayVariable = OpenMeteoDayVar;
export type OpenMeteoRelativeHumidityVariable = OpenMeteoNumberVar;
export type OpenMeteoDewPointVariable = OpenMeteoNumberVar;
export type OpenMeteoCapeVariable = OpenMeteoNumberVar;
export type OpenMeteoEvapotranspirationVariable = OpenMeteoNumberVar;
export type OpenMeteoSunshineDurationVariable = OpenMeteoNumberVar;
export type OpenMeteoVisibilityVariable = OpenMeteoNumberVar;
export type OpenMeteoRadiationVariable = OpenMeteoNumberVar;
export type OpenMeteoUvIndexVariable = OpenMeteoNumberVar;

/**
 * Current Variables
 */
export interface OpenMeteoForecastCurrentVariables {
  time: OpenMeteoTimeVariable;
  apparent_temperature?: OpenMeteoApparentTemperatureVariable;
  cloud_cover?: OpenMeteoCloudCoverVariable;
  interval?: OpenMeteoNumberVar;
  is_day?: OpenMeteoIsDayVariable;
  precipitation?: OpenMeteoPrecipitationVariable;
  pressure_msl?: OpenMeteoPressureMslVariable;
  rain?: OpenMeteoRainVariable;
  relative_humidity_2m?: OpenMeteoRelativeHumidityVariable;
  showers?: OpenMeteoShowersVariable;
  snowfall?: OpenMeteoSnowfallVariable;
  surface_pressure?: OpenMeteoSurfacePressureVariable;
  temperature_2m?: OpenMeteoTemperatureVariable;
  weather_code?: OpenMeteoWeatherCodeVariable;
  wind_direction_10m?: OpenMeteoWindDirectionVariable;
  wind_gusts_10m?: OpenMeteoWindGustsVariable;
  wind_speed_10m?: OpenMeteoWindSpeedVariable;
}

export type OpenMeteoForecastCurrentVariablesKey =
  keyof OpenMeteoForecastCurrentVariables;
export type OpenMeteoForecastCurrentVariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastCurrentVariables>;

/**
 * Daily Variables
 */
export interface OpenMeteoForecastDailyVariables {
  time: OpenMeteoTimeVariable[];
  apparent_temperature_max?: OpenMeteoApparentTemperatureVariable[];
  apparent_temperature_mean?: OpenMeteoApparentTemperatureVariable[];
  apparent_temperature_min?: OpenMeteoApparentTemperatureVariable[];
  cape_max?: OpenMeteoCapeVariable[];
  cape_mean?: OpenMeteoCapeVariable[];
  cape_min?: OpenMeteoCapeVariable[];
  cloud_cover_max?: OpenMeteoCloudCoverVariable[];
  cloud_cover_mean?: OpenMeteoCloudCoverVariable[];
  cloud_cover_min?: OpenMeteoCloudCoverVariable[];
  daylight_duration?: OpenMeteoNumberVar[];
  dew_point_2m_max?: OpenMeteoDewPointVariable[];
  dew_point_2m_mean?: OpenMeteoDewPointVariable[];
  dew_point_2m_min?: OpenMeteoDewPointVariable[];
  et0_fao_evapotranspiration_sum?: OpenMeteoEvapotranspirationVariable[];
  et0_fao_evapotranspiration?: OpenMeteoEvapotranspirationVariable[];
  growing_degree_days_base_0_limit_50?: OpenMeteoNumberVar[];
  leaf_wetness_probability_mean?: OpenMeteoNumberVar[];
  precipitation_hours?: OpenMeteoNumberVar[];
  precipitation_probability_max?: OpenMeteoPrecipitationProbabilityVariable[];
  precipitation_probability_mean?: OpenMeteoPrecipitationProbabilityVariable[];
  precipitation_probability_min?: OpenMeteoPrecipitationProbabilityVariable[];
  precipitation_sum?: OpenMeteoPrecipitationVariable[];
  pressure_msl_max?: OpenMeteoPressureMslVariable[];
  pressure_msl_mean?: OpenMeteoPressureMslVariable[];
  pressure_msl_min?: OpenMeteoPressureMslVariable[];
  rain_sum?: OpenMeteoRainVariable[];
  relative_humidity_2m_max?: OpenMeteoRelativeHumidityVariable[];
  relative_humidity_2m_mean?: OpenMeteoRelativeHumidityVariable[];
  relative_humidity_2m_min?: OpenMeteoRelativeHumidityVariable[];
  shortwave_radiation_sum?: OpenMeteoRadiationVariable[];
  showers_sum?: OpenMeteoShowersVariable[];
  snowfall_sum?: OpenMeteoSnowfallVariable[];
  snowfall_water_equivalent_sum?: OpenMeteoSnowfallVariable[];
  sunrise?: OpenMeteoStringVar[];
  sunset?: OpenMeteoStringVar[];
  sunshine_duration?: OpenMeteoSunshineDurationVariable[];
  surface_pressure_max?: OpenMeteoSurfacePressureVariable[];
  surface_pressure_mean?: OpenMeteoSurfacePressureVariable[];
  surface_pressure_min?: OpenMeteoSurfacePressureVariable[];
  temperature_2m_max?: OpenMeteoTemperatureVariable[];
  temperature_2m_mean?: OpenMeteoTemperatureVariable[];
  temperature_2m_min?: OpenMeteoTemperatureVariable[];
  updraft_max?: OpenMeteoNumberVar[];
  uv_index_clear_sky_max?: OpenMeteoUvIndexVariable[];
  uv_index_max?: OpenMeteoUvIndexVariable[];
  vapour_pressure_deficit_max?: OpenMeteoNumberVar[];
  visibility_max?: OpenMeteoVisibilityVariable[];
  visibility_mean?: OpenMeteoVisibilityVariable[];
  visibility_min?: OpenMeteoVisibilityVariable[];
  weather_code?: OpenMeteoWeatherCodeVariable[];
  wet_bulb_temperature_2m_max?: OpenMeteoTemperatureVariable[];
  wet_bulb_temperature_2m_mean?: OpenMeteoTemperatureVariable[];
  wet_bulb_temperature_2m_min?: OpenMeteoTemperatureVariable[];
  wind_direction_10m_dominant?: OpenMeteoWindDirectionVariable[];
  wind_gusts_10m_max?: OpenMeteoWindGustsVariable[];
  wind_gusts_10m_mean?: OpenMeteoWindGustsVariable[];
  wind_gusts_10m_min?: OpenMeteoWindGustsVariable[];
  wind_speed_10m_max?: OpenMeteoWindSpeedVariable[];
  wind_speed_10m_mean?: OpenMeteoWindSpeedVariable[];
  wind_speed_10m_min?: OpenMeteoWindSpeedVariable[];
}

export type OpenMeteoForecastDailyVariablesKey =
  keyof OpenMeteoForecastDailyVariables;
export type OpenMeteoForecastDailyVariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastDailyVariables>;

/**
 * Hourly Variables
 */
export interface OpenMeteoForecastHourlyVariables {
  time: OpenMeteoTimeVariable[];
  apparent_temperature?: OpenMeteoApparentTemperatureVariable[];
  boundary_layer_height?: OpenMeteoNumberVar[];
  cape?: OpenMeteoCapeVariable[];
  cloud_cover_high?: OpenMeteoCloudCoverVariable[];
  cloud_cover_low?: OpenMeteoCloudCoverVariable[];
  cloud_cover_mid?: OpenMeteoCloudCoverVariable[];
  cloud_cover?: OpenMeteoCloudCoverVariable[];
  convective_inhibition?: OpenMeteoNumberVar[];
  dew_point_2m?: OpenMeteoDewPointVariable[];
  diffuse_radiation_instant?: OpenMeteoRadiationVariable[];
  diffuse_radiation?: OpenMeteoRadiationVariable[];
  direct_normal_irradiance_instant?: OpenMeteoRadiationVariable[];
  direct_normal_irradiance?: OpenMeteoRadiationVariable[];
  direct_radiation_instant?: OpenMeteoRadiationVariable[];
  direct_radiation?: OpenMeteoRadiationVariable[];
  et0_fao_evapotranspiration?: OpenMeteoEvapotranspirationVariable[];
  evapotranspiration?: OpenMeteoEvapotranspirationVariable[];
  freezing_level_height?: OpenMeteoNumberVar[];
  global_tilted_irradiance_instant?: OpenMeteoRadiationVariable[];
  global_tilted_irradiance?: OpenMeteoRadiationVariable[];
  is_day?: OpenMeteoIsDayVariable[];
  lifted_index?: OpenMeteoNumberVar[];
  precipitation?: OpenMeteoPrecipitationVariable[];
  precipitation_probability?: OpenMeteoPrecipitationProbabilityVariable[];
  pressure_msl?: OpenMeteoPressureMslVariable[];
  rain?: OpenMeteoRainVariable[];
  relative_humidity_2m?: OpenMeteoRelativeHumidityVariable[];
  shortwave_radiation_instant?: OpenMeteoRadiationVariable[];
  shortwave_radiation?: OpenMeteoRadiationVariable[];
  showers?: OpenMeteoShowersVariable[];
  snow_depth?: OpenMeteoNumberVar[];
  snowfall?: OpenMeteoSnowfallVariable[];
  soil_moisture_0_to_1cm?: OpenMeteoNumberVar[];
  soil_moisture_1_to_3cm?: OpenMeteoNumberVar[];
  soil_moisture_27_to_81cm?: OpenMeteoNumberVar[];
  soil_moisture_3_to_9cm?: OpenMeteoNumberVar[];
  soil_moisture_9_to_27cm?: OpenMeteoNumberVar[];
  soil_temperature_0cm?: OpenMeteoNumberVar[];
  soil_temperature_18cm?: OpenMeteoNumberVar[];
  soil_temperature_54cm?: OpenMeteoNumberVar[];
  soil_temperature_6cm?: OpenMeteoNumberVar[];
  sunshine_duration?: OpenMeteoSunshineDurationVariable[];
  surface_pressure?: OpenMeteoSurfacePressureVariable[];
  temperature_120m?: OpenMeteoTemperatureVariable[];
  temperature_180m?: OpenMeteoTemperatureVariable[];
  temperature_2m?: OpenMeteoTemperatureVariable[];
  temperature_80m?: OpenMeteoTemperatureVariable[];
  terrestrial_radiation_instant?: OpenMeteoRadiationVariable[];
  terrestrial_radiation?: OpenMeteoRadiationVariable[];
  total_column_integrated_water_vapour?: OpenMeteoNumberVar[];
  uv_index_clear_sky?: OpenMeteoUvIndexVariable[];
  uv_index?: OpenMeteoUvIndexVariable[];
  vapour_pressure_deficit?: OpenMeteoNumberVar[];
  visibility?: OpenMeteoVisibilityVariable[];
  weather_code?: OpenMeteoWeatherCodeVariable[];
  wet_bulb_temperature_2m?: OpenMeteoTemperatureVariable[];
  wind_direction_10m?: OpenMeteoWindDirectionVariable[];
  wind_direction_120m?: OpenMeteoWindDirectionVariable[];
  wind_direction_180m?: OpenMeteoWindDirectionVariable[];
  wind_direction_80m?: OpenMeteoWindDirectionVariable[];
  wind_gusts_10m?: OpenMeteoWindGustsVariable[];
  wind_speed_10m?: OpenMeteoWindSpeedVariable[];
  wind_speed_120m?: OpenMeteoWindSpeedVariable[];
  wind_speed_180m?: OpenMeteoWindSpeedVariable[];
  wind_speed_80m?: OpenMeteoWindSpeedVariable[];
}

export type OpenMeteoForecastHourlyVariablesKey =
  keyof OpenMeteoForecastHourlyVariables;
export type OpenMeteoForecastHourlyVariablesUnits =
  OpenMeteoForecastVariablesUnits<OpenMeteoForecastHourlyVariables>;

/**
 * Minutely 15 Variables
 */
export interface OpenMeteoForecastMinutely15Variables {
  time: OpenMeteoTimeVariable[];
  apparent_temperature?: OpenMeteoApparentTemperatureVariable[];
  cape?: OpenMeteoCapeVariable[];
  dew_point_2m?: OpenMeteoDewPointVariable[];
  diffuse_radiation_instant?: OpenMeteoRadiationVariable[];
  diffuse_radiation?: OpenMeteoRadiationVariable[];
  direct_normal_irradiance_instant?: OpenMeteoRadiationVariable[];
  direct_normal_irradiance?: OpenMeteoRadiationVariable[];
  direct_radiation_instant?: OpenMeteoRadiationVariable[];
  direct_radiation?: OpenMeteoRadiationVariable[];
  freezing_level_height?: OpenMeteoNumberVar[];
  global_tilted_irradiance_instant?: OpenMeteoRadiationVariable[];
  global_tilted_irradiance?: OpenMeteoRadiationVariable[];
  is_day?: OpenMeteoIsDayVariable[];
  lightning_potential_index?: OpenMeteoNumberVar[];
  precipitation?: OpenMeteoPrecipitationVariable[];
  rain?: OpenMeteoRainVariable[];
  relative_humidity_2m?: OpenMeteoRelativeHumidityVariable[];
  shortwave_radiation_instant?: OpenMeteoRadiationVariable[];
  shortwave_radiation?: OpenMeteoRadiationVariable[];
  snowfall_height?: OpenMeteoNumberVar[];
  snowfall?: OpenMeteoSnowfallVariable[];
  sunshine_duration?: OpenMeteoSunshineDurationVariable[];
  temperature_2m?: OpenMeteoTemperatureVariable[];
  terrestrial_radiation_instant?: OpenMeteoRadiationVariable[];
  terrestrial_radiation?: OpenMeteoRadiationVariable[];
  visibility?: OpenMeteoVisibilityVariable[];
  weather_code?: OpenMeteoWeatherCodeVariable[];
  wind_direction_10m?: OpenMeteoWindDirectionVariable[];
  wind_direction_80m?: OpenMeteoWindDirectionVariable[];
  wind_gusts_10m?: OpenMeteoWindGustsVariable[];
  wind_speed_10m?: OpenMeteoWindSpeedVariable[];
  wind_speed_80m?: OpenMeteoWindSpeedVariable[];
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
