/**
 * Central configuration for all Open-Meteo API services.
 * * This object defines the base URLs, versions, and available endpoints.
 * It is marked `as const` to allow TypeScript to infer literal string types
 * for strict API client validation.
 * * @see {@link https://open-meteo.com/en/docs} for full API documentation.
 */
export const OPEN_METEO_API_CONFIG = {
  base: {
    baseUrl: 'https://api.open-meteo.com',
    versions: { v1: { number: 'v1', endpoints: { forecast: '/forecast' } } },
  },
  archive: {
    baseUrl: 'https://archive-api.open-meteo.com',
    versions: { v1: { number: 'v1', endpoints: { archive: '/archive' } } },
  },
  seasonal: {
    baseUrl: 'https://seasonal-api.open-meteo.com',
    versions: { v1: { number: 'v1', endpoints: { seasonal: '/seasonal' } } },
  },
  geocoding: {
    baseUrl: 'https://geocoding-api.open-meteo.com',
    versions: { v1: { number: 'v1', endpoints: { search: '/search' } } },
  },
} as const;

/**
 * WMO (World Meteorological Organization) Weather Interpretation Codes.
 * * Maps numeric weather codes returned by the API to human-readable descriptions.
 * This covers clear skies, fog, precipitation, and thunderstorms.
 * * @example
 * ```typescript
 * const description = WMO_WEATHER_INTERPRETATION_CODES[0]; // 'Clear sky'
 * ```
 * * @see {@link https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM} 
 * for the official WMO code table.
 */
export const WMO_WEATHER_INTERPRETATION_CODES: Record<number, string> = {
  // Clear and Cloudy
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',

  // Fog
  45: 'Fog',
  48: 'Depositing rime fog',

  // Drizzle
  51: 'Drizzle: Light intensity',
  53: 'Drizzle: Moderate intensity',
  55: 'Drizzle: Dense intensity',
  56: 'Freezing Drizzle: Light intensity',
  57: 'Freezing Drizzle: Dense intensity',

  // Rain
  61: 'Rain: Slight intensity',
  63: 'Rain: Moderate intensity',
  65: 'Rain: Heavy intensity',
  66: 'Freezing Rain: Light intensity',
  67: 'Freezing Rain: Heavy intensity',

  // Snow
  71: 'Snow fall: Slight intensity',
  73: 'Snow fall: Moderate intensity',
  75: 'Snow fall: Heavy intensity',
  77: 'Snow grains',

  // Showers
  80: 'Rain showers: Slight',
  81: 'Rain showers: Moderate',
  82: 'Rain showers: Violent',
  85: 'Snow showers: Slight',
  86: 'Snow showers: Heavy',

  // Thunderstorm
  95: 'Thunderstorm: Slight or moderate',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail',
};