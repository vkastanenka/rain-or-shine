import { useQuery } from '@tanstack/react-query';
import {
  OpenMeteoSDK,
  type HistoricalWeatherParams,
} from '@/services/open-meteo';
import { openMeteoQueryKeys } from './keys';

/**
 * Custom hook for retrieving archived weather data from the Open-Meteo Archive API.
 * Uses re-analysis models (ERA5) to provide highly accurate past weather records.
 * * @remarks
 * - **Immutability**: Because past weather data does not change, `staleTime` is set to `Infinity`.
 * Once fetched, the data remains valid in the cache for the duration of the session.
 * - **Prerequisites**: Requires `latitude`, `longitude`, and a `start_date` to be present
 * in the params to trigger the fetch.
 * - **Availability**: Typically supports data from 1940 up to 2-5 days ago.
 * * @param params - The historical parameters including date range and weather variables.
 * @returns A {@link UseQueryResult} with the historical weather dataset.
 * * @example
 * ```typescript
 * const { data } = useHistoricalWeather({
 * latitude: 40.7128,
 * longitude: -74.0060,
 * start_date: '2010-01-01',
 * end_date: '2010-01-07',
 * daily: ['temperature_2m_max']
 * });
 * ```
 */
export function useHistoricalWeather(params: HistoricalWeatherParams) {
  return useQuery({
    // Cache key includes coordinates and date range
    queryKey: openMeteoQueryKeys.historical(params),

    // Execution via the singleton SDK instance
    queryFn: () => OpenMeteoSDK.history.getHistoricalData(params),

    // Static data strategy: never mark as stale
    staleTime: Infinity,

    // Validation: prevent API calls with missing core data
    enabled: !!params.latitude && !!params.longitude && !!params.start_date,
  });
}
