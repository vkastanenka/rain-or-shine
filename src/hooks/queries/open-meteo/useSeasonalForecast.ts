import { useQuery } from '@tanstack/react-query';
import {
  OpenMeteoSDK,
  type SeasonalForecastParams,
} from '@/services/open-meteo';
import { openMeteoQueryKeys } from './keys';

/**
 * Custom hook for accessing long-range seasonal climate outlooks.
 * Powered by ECMWF SEAS5 and EC46 ensemble models (51 members).
 * * @remarks
 * - **Probabilistic Data**: Focuses on "Anomalies" (deviations from 30-year climate norms)
 * rather than exact daily temperatures.
 * - **Update Frequency**: SEAS5 models typically update once a month (around the 5th),
 * while EC46 updates daily. The 24-hour `staleTime` reflects this slow-moving data.
 * - **Native Resolution**: Data is natively 6-hourly. Requesting 1-hourly data will
 * provide interpolated values but not higher accuracy.
 * * @param params - Seasonal parameters including coordinates and requested anomalies.
 * @returns A {@link UseQueryResult} containing the probabilistic seasonal outlook.
 * * @example
 * ```typescript
 * const { data } = useSeasonalForecast({
 * latitude: 52.52,
 * longitude: 13.41,
 * hourly: ['temperature_2m_anomaly', 'precipitation_anomaly'],
 * models: 'ecmwf_seas5'
 * });
 * ```
 */
export function useSeasonalForecast(params: SeasonalForecastParams) {
  return useQuery({
    // Cache key specific to the long-range parameters
    queryKey: openMeteoQueryKeys.seasonal(params),

    // Calls the seasonal-specific API endpoint
    queryFn: () => OpenMeteoSDK.seasonal.getSeasonalForecast(params),

    // Seasonal models update slowly; 24h caching is optimal
    staleTime: 1000 * 60 * 60 * 24,

    // Only fetch if we have valid coordinates
    enabled: !!params.latitude && !!params.longitude,
  });
}
