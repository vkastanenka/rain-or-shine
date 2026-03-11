import { 
  type WeatherForecastParams, 
  type HistoricalWeatherParams, 
  type SeasonalForecastParams, 
  type GeocodingSearchParams 
} from "@/services/open-meteo";

/**
 * Query Key Factory for Open-Meteo services.
 * * Centralizing keys ensures cache consistency, enables effective cache invalidation,
 * and prevents manual string typos across the application.
 * * @example
 * // Invalidate all weather data
 * queryClient.invalidateQueries({ queryKey: openMeteoQueryKeys.all })
 */
export const openMeteoQueryKeys = {
  /** Root key for all Open-Meteo related queries. */
  all: ['open-meteo'] as const,
  
  /** Collection key for all weather forecast queries. */
  forecasts: () => [...openMeteoQueryKeys.all, 'forecast'] as const,
  /** * Specific key for a forecast request.
   * @param params - The unique parameters (lat, lon, etc.) that define this cache entry.
   */
  forecast: (params: WeatherForecastParams) => [...openMeteoQueryKeys.forecasts(), params] as const,
  
  /** Collection key for all historical data queries. */
  history: () => [...openMeteoQueryKeys.all, 'history'] as const,
  /** * Specific key for a historical data request.
   * @param params - Parameters including the specific date range for caching.
   */
  historical: (params: HistoricalWeatherParams) => [...openMeteoQueryKeys.history(), params] as const,
  
  /** Collection key for all seasonal outlook queries. */
  seasonalAll: () => [...openMeteoQueryKeys.all, 'seasonal'] as const,
  /** * Specific key for a seasonal forecast request.
   * @param params - Parameters for long-range probabilistic data.
   */
  seasonal: (params: SeasonalForecastParams) => [...openMeteoQueryKeys.seasonalAll(), params] as const,
  
  /** Collection key for all geocoding/search queries. */
  geocodingAll: () => [...openMeteoQueryKeys.all, 'geocoding'] as const,
  /** * Specific key for a location search.
   * @param params - Includes the search 'name' which acts as the primary cache breaker.
   */
  search: (params: GeocodingSearchParams) => [...openMeteoQueryKeys.geocodingAll(), 'search', params] as const,
};
