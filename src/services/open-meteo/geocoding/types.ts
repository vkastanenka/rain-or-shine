/**
 * Parameters for the Geocoding search endpoint.
 */
export interface GeocodingSearchParams {
  /** * The location name or postal code to search for. 
   * Minimum 2 characters for exact matches; 3+ characters for fuzzy matching.
   */
  name: string;
  /** * Maximum number of results to return. 
   * @minimum 1 
   * @maximum 100 
   * @default 10 
   */
  count?: number;
  /** * Language for the localized result names (e.g., 'en', 'de', 'fr'). 
   * @default 'en' 
   */
  language?: string;
  /** * Filter results to a specific country using ISO-3166-1 alpha2 code (e.g., 'US', 'DE'). 
   */
  countryCode?: string;
  /** * Required only for commercial customers using the customer- API prefix. 
   */
  apikey?: string;
}

/**
 * Detailed geographical and administrative information for a specific location.
 */
export interface GeocodingLocation {
  /** Unique identifier for the location. */
  id: number;
  /** Name of the location, localized based on the requested language. */
  name: string;
  /** WGS84 coordinate of the location. */
  latitude: number;
  /** WGS84 coordinate of the location. */
  longitude: number;
  /** Elevation above mean sea level in meters. */
  elevation: number;
  /** Location type classification (e.g., 'PPLC' for capital city). Based on GeoNames. */
  feature_code: string;
  /** ISO-3166-1 alpha2 country code. */
  country_code: string;
  /** Timezone identifier (e.g., 'America/Chicago'). */
  timezone: string;
  /** Estimated number of inhabitants. */
  population?: number;
  /** List of postal codes associated with this location. */
  postcodes?: string[];
  /** Unique ID for the country. */
  country_id: number;
  /** Name of the country. */
  country: string;
  /** First-level administrative division (e.g., State in the US, Region in Italy). */
  admin1?: string;
  /** Second-level administrative division (e.g., County in the US). */
  admin2?: string;
  /** Third-level administrative division. */
  admin3?: string;
  /** Fourth-level administrative division. */
  admin4?: string;
  /** Unique ID for the first-level administrative division. */
  admin1_id?: number;
  /** Unique ID for the second-level administrative division. */
  admin2_id?: number;
  /** Unique ID for the third-level administrative division. */
  admin3_id?: number;
  /** Unique ID for the fourth-level administrative division. */
  admin4_id?: number;
}

/**
 * The API response returned by the geocoding search endpoint.
 */
export interface GeocodingResponse {
  /** * Array of matching locations. 
   * Note: This field may be undefined if no results are found.
   */
  results?: GeocodingLocation[];
  /** Execution time of the search query in milliseconds. */
  generationtime_ms: number;
}
