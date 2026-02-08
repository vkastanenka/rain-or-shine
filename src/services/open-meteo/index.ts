/**
 * Open-Meteo SDK
 * * A comprehensive, type-safe wrapper for the Open-Meteo API suite,
 * providing weather forecasts, historical data, seasonal outlooks, 
 * and geocoding services.
 */

import { WeatherForecastServiceV1 } from './weather-forecast';
import { HistoricalWeatherServiceV1 } from './historical-weather';
import { SeasonalForecastServiceV1 } from './seasonal-forecast';
import { GeocodingServiceV1 } from './geocoding';

// --- SERVICE INSTANCES (Singletons) ---

/** Service for high-resolution 16-day weather forecasts. */
export const weatherForecast = new WeatherForecastServiceV1();

/** Service for accessing long-term historical weather records (ERA5). */
export const historicalWeather = new HistoricalWeatherServiceV1();

/** Service for long-range probabilistic seasonal outlooks. */
export const seasonalForecast = new SeasonalForecastServiceV1();

/** Service for location searching and coordinate resolution. */
export const geocoding = new GeocodingServiceV1();

// --- BUNDLED SDK OBJECT ---

/**
 * The unified OpenMeteo SDK object.
 * Provides a single entry point for all weather-related operations.
 */
export const OpenMeteoSDK = {
  forecast: weatherForecast,
  history: historicalWeather,
  seasonal: seasonalForecast,
  geocoding: geocoding,
} as const;

// --- EXPORT TYPES & CONSTANTS ---

// Re-exporting all types so they can be accessed via: 
// import { ForecastParams } from '@/services/open-meteo'
export * from './base/types';
export * from './base/constants';
export * from './weather-forecast/types';
export * from './historical-weather/types';
export * from './seasonal-forecast/types';
export * from './geocoding/types';