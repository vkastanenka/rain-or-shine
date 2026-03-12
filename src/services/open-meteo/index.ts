/**
 * Open-Meteo SDK
 * * A comprehensive, type-safe wrapper for the Open-Meteo API suite,
 * providing weather forecasts, historical data, seasonal outlooks, 
 * and geocoding services.
 */

import { WeatherForecastService } from './weather-forecast';
import { HistoricalWeatherService } from './historical-weather';
import { SeasonalForecastService } from './seasonal-forecast';
import { GeocodingService } from './geocoding-old';

// --- SERVICE INSTANCES (Singletons) ---

/** Service for high-resolution 16-day weather forecasts. */
export const weatherForecast = new WeatherForecastService();

/** Service for accessing long-term historical weather records (ERA5). */
export const historicalWeather = new HistoricalWeatherService();

/** Service for long-range probabilistic seasonal outlooks. */
export const seasonalForecast = new SeasonalForecastService();

/** Service for location searching and coordinate resolution. */
export const geocoding = new GeocodingService();

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
export * from './geocoding-old/types';