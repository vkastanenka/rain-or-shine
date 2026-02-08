import { OpenMeteoApiClient } from '../base/client';
import { OPEN_METEO_API_CONFIG } from '../base/constants';
import {
  type OpenMeteoGeocodingApiVersions,
} from '../base/types';
import {
  type GeocodingSearchParams,
  type GeocodingResponse,
} from './types';

/**
 * Abstract base class for Geocoding services.
 * Handles the configuration of the Geocoding-specific base URL and versioning.
 * @abstract
 */
abstract class GeocodingServiceBase extends OpenMeteoApiClient {
  constructor(version: OpenMeteoGeocodingApiVersions) {
    super(OPEN_METEO_API_CONFIG.geocoding.baseUrl, version);
  }
}

/**
 * Service for interacting with the Open-Meteo Geocoding API (v1).
 * Used to convert place names or postal codes into geographic coordinates.
 */
export class GeocodingService extends GeocodingServiceBase {
  /**
   * Initializes the Geocoding service using the v1 configuration.
   */
  constructor() {
    super(OPEN_METEO_API_CONFIG.geocoding.versions.v1.number);
  }

  /**
   * Searches for geographical locations based on a search term or postal code.
   * * @remarks
   * - 1 character: Returns empty results.
   * - 2 characters: Performs exact matching.
   * - 3+ characters: Performs fuzzy matching for better discovery.
   * * @param params - Search parameters including the name, result count, and language.
   * @returns A promise resolving to a {@link GeocodingResponse} containing a list of matching locations.
   * * @example
   * ```typescript
   * const locations = await geocodingService.getLocations({ name: 'Berlin', count: 5 });
   * ```
   */
  public getLocations = (
    params: GeocodingSearchParams,
  ): Promise<GeocodingResponse> => {
    return this.instance.get(
      OPEN_METEO_API_CONFIG.geocoding.versions.v1.endpoints.search,
      { params },
    );
  };
}
