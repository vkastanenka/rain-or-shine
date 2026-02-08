import { OPEN_METEO_API_CONFIG } from './constants';

/**
 * Represents the valid base URLs for Open-Meteo services as defined in the config.
 */
export type OpenMeteoBaseUrl = typeof OPEN_METEO_API_CONFIG[keyof typeof OPEN_METEO_API_CONFIG]['baseUrl'];

export type OpenMeteoBaseApiVersions = (typeof OPEN_METEO_API_CONFIG.base.versions)[keyof typeof OPEN_METEO_API_CONFIG.base.versions]['number'];
export type OpenMeteoArchiveApiVersions = (typeof OPEN_METEO_API_CONFIG.archive.versions)[keyof typeof OPEN_METEO_API_CONFIG.archive.versions]['number'];
export type OpenMeteoSeasonalApiVersions = (typeof OPEN_METEO_API_CONFIG.seasonal.versions)[keyof typeof OPEN_METEO_API_CONFIG.seasonal.versions]['number'];
export type OpenMeteoGeocodingApiVersions = (typeof OPEN_METEO_API_CONFIG.geocoding.versions)[keyof typeof OPEN_METEO_API_CONFIG.geocoding.versions]['number'];

/**
 * A union of all supported API version strings across all services.
 * Ensures the ApiClient only initializes with valid version identifiers.
 */
export type OpenMeteoVersion = 
  | OpenMeteoBaseApiVersions 
  | OpenMeteoArchiveApiVersions 
  | OpenMeteoSeasonalApiVersions 
  | OpenMeteoGeocodingApiVersions;

/**
 * Shared request parameters common to most Open-Meteo weather services.
 */
export interface BaseWeatherParams {
  /** WGS84 coordinate of the location. Can be a single number or an array for multiple locations. */
  latitude: number | number[];
  /** WGS84 coordinate of the location. */
  longitude: number | number[];
  /** The elevation used for statistical downscaling. Use 'nan' to disable downscaling. */
  elevation?: number | 'nan';
  /** Unit for temperature values. Defaults to 'celsius'. */
  temperature_unit?: 'celsius' | 'fahrenheit';
  /** Unit for wind speed values. Defaults to 'kmh'. */
  wind_speed_unit?: 'kmh' | 'ms' | 'mph' | 'kn';
  /** Unit for precipitation amounts. Defaults to 'mm'. */
  precipitation_unit?: 'mm' | 'inch';
  /** Format for returned time values. 'unixtime' is returned as seconds in GMT+0. */
  timeformat?: 'iso8601' | 'unixtime';
  /** Timezone for local time conversion. Use 'auto' to resolve based on coordinates. */
  timezone?: string;
}

export interface CurrentResponse {
  /** ISO8601 timestamp or unix epoch */
  time: string | number;
  /** The duration in seconds used for calculating backward-looking sums or averages */
  interval: number;
  /** * Dynamic weather variables requested by the user. 
   * Using 'number' instead of 'any' because Open-Meteo returns numeric weather data.
   */
  [key: string]: string | number | undefined;
}

/**
 * The structure of the successful JSON response from the weather APIs.
 */
export interface WeatherResponse {
  /** WGS84 center of the weather grid-cell used for this forecast. */
  latitude: number;
  longitude: number;
  /** Elevation from a 90m digital elevation model. */
  elevation: number;
  /** Generation time of the weather forecast in milliseconds for performance monitoring. */
  generationtime_ms: number;
  /** Applied timezone offset from UTC in seconds. */
  utc_offset_seconds: number;
  /** Timezone identifier (e.g., 'Europe/Berlin'). */
  timezone: string;
  /** Timezone abbreviation (e.g., 'CEST'). */
  timezone_abbreviation: string;
  /** Object containing current weather conditions if requested. */
  current?: CurrentResponse;
  /** * Hourly weather data. 
   * Includes a 'time' array and dynamic arrays for each requested variable. 
   */
  hourly?: {
    time: string[];
    [key: string]: (number | string)[];
  };
  /** Mapping of hourly variable names to their respective units. */
  hourly_units?: Record<string, string>;
  /** * Daily weather aggregations. 
   * Includes a 'time' array and dynamic arrays for each requested variable. 
   */
  daily?: {
    time: string[];
    [key: string]: (number | string)[];
  };
  /** Mapping of daily variable names to their respective units. */
  daily_units?: Record<string, string>;
}
