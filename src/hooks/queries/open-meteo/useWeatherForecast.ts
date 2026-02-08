import { useQuery } from '@tanstack/react-query';
import {
  OpenMeteoSDK,
  type WeatherForecastParams,
} from '@/services/open-meteo';
import { openMeteoQueryKeys } from './keys';

/**
 * Custom hook for fetching real-time and future weather forecasts.
 * Leverages the Open-Meteo "Best Match" model selection to provide the most
 * accurate data for any given coordinate globally.
 * * @remarks
 * - **Caching**: Uses a 15-minute `staleTime`. This aligns with Open-Meteo's
 * internal API caching, preventing redundant network requests for data
 * that hasn't been updated on the server yet.
 * - **Conditional Fetching**: The query is only `enabled` when valid `latitude`
 * and `longitude` are provided.
 * - **Auto-Interpolation**: Results are automatically interpolated to hourly
 * steps by the underlying API.
 * * @param params - Configuration for the forecast, including coordinates and
 * requested variables (hourly, daily, current).
 * @returns A {@link UseQueryResult} containing the typed {@link WeatherResponse}.
 * * @example
 * ```typescript
 * const { data, isLoading } = useWeatherForecast({
 * latitude: 52.52,
 * longitude: 13.41,
 * current: ['temperature_2m', 'weather_code'],
 * forecast_days: 1
 * });
 * ```
 */
export function useWeatherForecast(params: WeatherForecastParams) {
  return useQuery({
    // The key factory ensures that changing params (like units or days)
    // triggers a fresh fetch and a new cache entry.
    queryKey: openMeteoQueryKeys.forecast(params),

    // Calls the Forecast service instance
    queryFn: () => OpenMeteoSDK.forecast.getForecast(params),

    // 15 minutes is the standard refresh rate for most weather model post-processing
    staleTime: 1000 * 60 * 15,

    // Safety check to avoid 400 errors from missing coordinates
    enabled: !!params.latitude && !!params.longitude,
  });
}
