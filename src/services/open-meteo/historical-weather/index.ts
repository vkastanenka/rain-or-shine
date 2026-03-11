import { OpenMeteoApiClient } from '../base/client';
import { OPEN_METEO_API_CONFIG } from '../base/constants';
import {
  type OpenMeteoArchiveApiVersions,
  type WeatherResponse,
} from '../base/types';
import {
  type HistoricalWeatherParams,
} from './types';

/**
 * Abstract base class for Historical Weather services.
 * Configures the client to point to the Open-Meteo Archive API.
 * @abstract
 */
abstract class HistoricalWeatherServiceBase extends OpenMeteoApiClient {
  constructor(version: OpenMeteoArchiveApiVersions) {
    super(OPEN_METEO_API_CONFIG.archive.baseUrl, version);
  }
}

/**
 * Service for interacting with the Open-Meteo Historical Weather (Archive) API.
 * Provides access to past weather data based on re-analysis models (e.g., ERA5).
 * * @remarks
 * Historical data is typically available with a delay of 2 to 5 days from the 
 * current date. For data within the last 48 hours, use the Forecast service 
 * with the `past_days` parameter.
 */
export class HistoricalWeatherService extends HistoricalWeatherServiceBase {
  /**
   * Initializes the Historical Weather service using the v1 configuration.
   */
  constructor() {
    super(OPEN_METEO_API_CONFIG.archive.versions.v1.number);
  }

  /**
   * Retrieves historical weather data for a specific time period.
   * * @param params - Historical parameters including required start/end dates.
   * @returns A promise resolving to a {@link WeatherResponse} containing historical records.
   * * @example
   * ```typescript
   * const history = await historicalService.getHistoricalData({
   * latitude: 52.52,
   * longitude: 13.41,
   * start_date: '2023-01-01',
   * end_date: '2023-01-10',
   * hourly: ['temperature_2m', 'rain']
   * });
   * ```
   */
  public getHistoricalData = (params: HistoricalWeatherParams): Promise<WeatherResponse> => {
    // Open-Meteo prefers arrays to be comma-separated strings
    const formattedParams = {
      ...params,
      hourly: Array.isArray(params.hourly) ? params.hourly.join(',') : params.hourly,
      daily: Array.isArray(params.daily) ? params.daily.join(',') : params.daily,
    };

    return this.instance.get(
      OPEN_METEO_API_CONFIG.archive.versions.v1.endpoints.archive,
      { params: formattedParams }
    );
  };
}
