import { type WmoCodesMapKey } from "@/entities/wmo";
import { TIME_INTERVAL_MAP, TIME_INTERVAL_UNIT_MAP } from "../constants";

export type ForecastVariablesUnits<T> = {
  [K in keyof T]: string;
};

/**
 * Base Variable Types
 */
export type NumberVar = number | null | undefined;
export type StringVar = string | null | undefined;
export type WmoVar = WmoCodesMapKey | null | undefined;
export type DayVar = 1 | 0 | null | undefined;

/**
 * Shared Type Definitions
 */
export type TimeVariable = string;
export type ApparentTemperatureVariable = NumberVar;
export type CloudCoverVariable = NumberVar;
export type PrecipitationVariable = NumberVar;
export type PrecipitationProbabilityVariable = NumberVar;
export type RainVariable = NumberVar;
export type ShowersVariable = NumberVar;
export type SnowfallVariable = NumberVar;
export type TemperatureVariable = NumberVar;
export type WeatherCodeVariable = WmoVar;
export type WindSpeedVariable = NumberVar;
export type WindDirectionVariable = NumberVar;
export type WindGustsVariable = NumberVar;
export type SurfacePressureVariable = NumberVar;
export type PressureMslVariable = NumberVar;
export type IsDayVariable = DayVar;
export type RelativeHumidityVariable = NumberVar;
export type DewPointVariable = NumberVar;
export type CapeVariable = NumberVar;
export type EvapotranspirationVariable = NumberVar;
export type SunshineDurationVariable = NumberVar;
export type VisibilityVariable = NumberVar;
export type RadiationVariable = NumberVar;
export type UvIndexVariable = NumberVar;

/**
 * Current Variables
 */
export interface ForecastCurrentVariables {
  time: TimeVariable;
  apparent_temperature?: ApparentTemperatureVariable;
  cloud_cover?: CloudCoverVariable;
  interval?: NumberVar;
  is_day?: IsDayVariable;
  precipitation?: PrecipitationVariable;
  pressure_msl?: PressureMslVariable;
  rain?: RainVariable;
  relative_humidity_2m?: RelativeHumidityVariable;
  showers?: ShowersVariable;
  snowfall?: SnowfallVariable;
  surface_pressure?: SurfacePressureVariable;
  temperature_2m?: TemperatureVariable;
  weather_code?: WeatherCodeVariable;
  wind_direction_10m?: WindDirectionVariable;
  wind_gusts_10m?: WindGustsVariable;
  wind_speed_10m?: WindSpeedVariable;
}

export type ForecastCurrentVariablesKey = keyof ForecastCurrentVariables;
export type ForecastCurrentVariablesUnits =
  ForecastVariablesUnits<ForecastCurrentVariables>;

/**
 * Daily Variables
 */
export interface ForecastDailyVariables {
  time: TimeVariable[];
  apparent_temperature_max?: ApparentTemperatureVariable[];
  apparent_temperature_mean?: ApparentTemperatureVariable[];
  apparent_temperature_min?: ApparentTemperatureVariable[];
  cape_max?: CapeVariable[];
  cape_mean?: CapeVariable[];
  cape_min?: CapeVariable[];
  cloud_cover_max?: CloudCoverVariable[];
  cloud_cover_mean?: CloudCoverVariable[];
  cloud_cover_min?: CloudCoverVariable[];
  daylight_duration?: NumberVar[];
  dew_point_2m_max?: DewPointVariable[];
  dew_point_2m_mean?: DewPointVariable[];
  dew_point_2m_min?: DewPointVariable[];
  et0_fao_evapotranspiration_sum?: EvapotranspirationVariable[];
  et0_fao_evapotranspiration?: EvapotranspirationVariable[];
  growing_degree_days_base_0_limit_50?: NumberVar[];
  leaf_wetness_probability_mean?: NumberVar[];
  precipitation_hours?: NumberVar[];
  precipitation_probability_max?: PrecipitationProbabilityVariable[];
  precipitation_probability_mean?: PrecipitationProbabilityVariable[];
  precipitation_probability_min?: PrecipitationProbabilityVariable[];
  precipitation_sum?: PrecipitationVariable[];
  pressure_msl_max?: PressureMslVariable[];
  pressure_msl_mean?: PressureMslVariable[];
  pressure_msl_min?: PressureMslVariable[];
  rain_sum?: RainVariable[];
  relative_humidity_2m_max?: RelativeHumidityVariable[];
  relative_humidity_2m_mean?: RelativeHumidityVariable[];
  relative_humidity_2m_min?: RelativeHumidityVariable[];
  shortwave_radiation_sum?: RadiationVariable[];
  showers_sum?: ShowersVariable[];
  snowfall_sum?: SnowfallVariable[];
  snowfall_water_equivalent_sum?: SnowfallVariable[];
  sunrise?: StringVar[];
  sunset?: StringVar[];
  sunshine_duration?: SunshineDurationVariable[];
  surface_pressure_max?: SurfacePressureVariable[];
  surface_pressure_mean?: SurfacePressureVariable[];
  surface_pressure_min?: SurfacePressureVariable[];
  temperature_2m_max?: TemperatureVariable[];
  temperature_2m_mean?: TemperatureVariable[];
  temperature_2m_min?: TemperatureVariable[];
  updraft_max?: NumberVar[];
  uv_index_clear_sky_max?: UvIndexVariable[];
  uv_index_max?: UvIndexVariable[];
  vapour_pressure_deficit_max?: NumberVar[];
  visibility_max?: VisibilityVariable[];
  visibility_mean?: VisibilityVariable[];
  visibility_min?: VisibilityVariable[];
  weather_code?: WeatherCodeVariable[];
  wet_bulb_temperature_2m_max?: TemperatureVariable[];
  wet_bulb_temperature_2m_mean?: TemperatureVariable[];
  wet_bulb_temperature_2m_min?: TemperatureVariable[];
  wind_direction_10m_dominant?: WindDirectionVariable[];
  wind_gusts_10m_max?: WindGustsVariable[];
  wind_gusts_10m_mean?: WindGustsVariable[];
  wind_gusts_10m_min?: WindGustsVariable[];
  wind_speed_10m_max?: WindSpeedVariable[];
  wind_speed_10m_mean?: WindSpeedVariable[];
  wind_speed_10m_min?: WindSpeedVariable[];
}

export type ForecastDailyVariablesKey = keyof ForecastDailyVariables;
export type ForecastDailyVariablesUnits =
  ForecastVariablesUnits<ForecastDailyVariables>;

/**
 * Hourly Variables
 */
export interface ForecastHourlyVariables {
  time: TimeVariable[];
  apparent_temperature?: ApparentTemperatureVariable[];
  boundary_layer_height?: NumberVar[];
  cape?: CapeVariable[];
  cloud_cover_high?: CloudCoverVariable[];
  cloud_cover_low?: CloudCoverVariable[];
  cloud_cover_mid?: CloudCoverVariable[];
  cloud_cover?: CloudCoverVariable[];
  convective_inhibition?: NumberVar[];
  dew_point_2m?: DewPointVariable[];
  diffuse_radiation_instant?: RadiationVariable[];
  diffuse_radiation?: RadiationVariable[];
  direct_normal_irradiance_instant?: RadiationVariable[];
  direct_normal_irradiance?: RadiationVariable[];
  direct_radiation_instant?: RadiationVariable[];
  direct_radiation?: RadiationVariable[];
  et0_fao_evapotranspiration?: EvapotranspirationVariable[];
  evapotranspiration?: EvapotranspirationVariable[];
  freezing_level_height?: NumberVar[];
  global_tilted_irradiance_instant?: RadiationVariable[];
  global_tilted_irradiance?: RadiationVariable[];
  is_day?: IsDayVariable[];
  lifted_index?: NumberVar[];
  precipitation?: PrecipitationVariable[];
  precipitation_probability?: PrecipitationProbabilityVariable[];
  pressure_msl?: PressureMslVariable[];
  rain?: RainVariable[];
  relative_humidity_2m?: RelativeHumidityVariable[];
  shortwave_radiation_instant?: RadiationVariable[];
  shortwave_radiation?: RadiationVariable[];
  showers?: ShowersVariable[];
  snow_depth?: NumberVar[];
  snowfall?: SnowfallVariable[];
  soil_moisture_0_to_1cm?: NumberVar[];
  soil_moisture_1_to_3cm?: NumberVar[];
  soil_moisture_27_to_81cm?: NumberVar[];
  soil_moisture_3_to_9cm?: NumberVar[];
  soil_moisture_9_to_27cm?: NumberVar[];
  soil_temperature_0cm?: NumberVar[];
  soil_temperature_18cm?: NumberVar[];
  soil_temperature_54cm?: NumberVar[];
  soil_temperature_6cm?: NumberVar[];
  sunshine_duration?: SunshineDurationVariable[];
  surface_pressure?: SurfacePressureVariable[];
  temperature_120m?: TemperatureVariable[];
  temperature_180m?: TemperatureVariable[];
  temperature_2m?: TemperatureVariable[];
  temperature_80m?: TemperatureVariable[];
  terrestrial_radiation_instant?: RadiationVariable[];
  terrestrial_radiation?: RadiationVariable[];
  total_column_integrated_water_vapour?: NumberVar[];
  uv_index_clear_sky?: UvIndexVariable[];
  uv_index?: UvIndexVariable[];
  vapour_pressure_deficit?: NumberVar[];
  visibility?: VisibilityVariable[];
  weather_code?: WeatherCodeVariable[];
  wet_bulb_temperature_2m?: TemperatureVariable[];
  wind_direction_10m?: WindDirectionVariable[];
  wind_direction_120m?: WindDirectionVariable[];
  wind_direction_180m?: WindDirectionVariable[];
  wind_direction_80m?: WindDirectionVariable[];
  wind_gusts_10m?: WindGustsVariable[];
  wind_speed_10m?: WindSpeedVariable[];
  wind_speed_120m?: WindSpeedVariable[];
  wind_speed_180m?: WindSpeedVariable[];
  wind_speed_80m?: WindSpeedVariable[];
}

export type ForecastHourlyVariablesKey = keyof ForecastHourlyVariables;
export type ForecastHourlyVariablesUnits =
  ForecastVariablesUnits<ForecastHourlyVariables>;

/**
 * Minutely 15 Variables
 */
export interface ForecastMinutely15Variables {
  time: TimeVariable[];
  apparent_temperature?: ApparentTemperatureVariable[];
  cape?: CapeVariable[];
  dew_point_2m?: DewPointVariable[];
  diffuse_radiation_instant?: RadiationVariable[];
  diffuse_radiation?: RadiationVariable[];
  direct_normal_irradiance_instant?: RadiationVariable[];
  direct_normal_irradiance?: RadiationVariable[];
  direct_radiation_instant?: RadiationVariable[];
  direct_radiation?: RadiationVariable[];
  freezing_level_height?: NumberVar[];
  global_tilted_irradiance_instant?: RadiationVariable[];
  global_tilted_irradiance?: RadiationVariable[];
  is_day?: IsDayVariable[];
  lightning_potential_index?: NumberVar[];
  precipitation?: PrecipitationVariable[];
  rain?: RainVariable[];
  relative_humidity_2m?: RelativeHumidityVariable[];
  shortwave_radiation_instant?: RadiationVariable[];
  shortwave_radiation?: RadiationVariable[];
  snowfall_height?: NumberVar[];
  snowfall?: SnowfallVariable[];
  sunshine_duration?: SunshineDurationVariable[];
  temperature_2m?: TemperatureVariable[];
  terrestrial_radiation_instant?: RadiationVariable[];
  terrestrial_radiation?: RadiationVariable[];
  visibility?: VisibilityVariable[];
  weather_code?: WeatherCodeVariable[];
  wind_direction_10m?: WindDirectionVariable[];
  wind_direction_80m?: WindDirectionVariable[];
  wind_gusts_10m?: WindGustsVariable[];
  wind_speed_10m?: WindSpeedVariable[];
  wind_speed_80m?: WindSpeedVariable[];
}

export type ForecastMinutely15VariablesKey = keyof ForecastMinutely15Variables;
export type ForecastMinutely15VariablesUnits =
  ForecastVariablesUnits<ForecastMinutely15Variables>;

/**
 * Maps
 */
export interface ForecastTimeIntervalVariablesMap {
  [TIME_INTERVAL_MAP.Current]: ForecastCurrentVariables;
  [TIME_INTERVAL_MAP.Daily]: ForecastDailyVariables;
  [TIME_INTERVAL_MAP.Hourly]: ForecastHourlyVariables;
  [TIME_INTERVAL_MAP.Minutely15]: ForecastMinutely15Variables;
}

export interface ForecastTimeIntervalVariablesUnitsMap {
  [TIME_INTERVAL_UNIT_MAP.Current]: ForecastCurrentVariablesUnits;
  [TIME_INTERVAL_UNIT_MAP.Daily]: ForecastDailyVariablesUnits;
  [TIME_INTERVAL_UNIT_MAP.Hourly]: ForecastHourlyVariablesUnits;
  [TIME_INTERVAL_UNIT_MAP.Minutely15]: ForecastMinutely15VariablesUnits;
}
