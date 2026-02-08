import { useQuery } from '@tanstack/react-query';
import {
  OpenMeteoSDK,
  type GeocodingSearchParams,
} from '@/services/open-meteo';
import { openMeteoQueryKeys } from './keys';

/**
 * Custom hook for searching locations using the Open-Meteo Geocoding API.
 * * @remarks
 * - **Efficiency**: The query is only `enabled` when the search term has 2 or more characters
 * to prevent unnecessary API calls while the user starts typing.
 * - **Caching**: Results are cached for 1 hour (`staleTime`) since geographic
 * data and city names rarely change.
 * * @param params - Search parameters including the location name and optional count/language settings.
 * @returns A {@link UseQueryResult} containing the search results, loading state, and potential errors.
 * * @example
 * ```typescript
 * const { data, isLoading } = useGeocodingSearch({ name: 'Berlin', count: 5 });
 * * if (data?.results) {
 * console.log(data.results[0].latitude, data.results[0].longitude);
 * }
 * ```
 */
export function useGeocodingSearch(params: GeocodingSearchParams) {
  return useQuery({
    // Uses the centralized key factory to manage the cache for this specific search
    queryKey: openMeteoQueryKeys.search(params),

    // Calls the underlying SDK method
    queryFn: () => OpenMeteoSDK.geocoding.getLocations(params),

    // Caching configuration
    staleTime: 1000 * 60 * 60, // 1 hour

    // Conditional fetching logic
    enabled: (params.name?.length ?? 0) >= 2,
  });
}
