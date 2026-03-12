import { OpenMeteoApiClient } from '../base/client';
import { OPEN_METEO_API_CONFIG } from '../base/constants';
import {
  type OpenMeteoSeasonalApiVersions,
} from '../base/types';
import {
  type SeasonalForecastParams,
  type SeasonalWeatherResponse,
} from './types';

/**
 * Abstract base class for Seasonal Forecast services.
 * Configures the client to point to the Open-Meteo Seasonal API.
 * @abstract
 */
abstract class SeasonalForecastServiceBase extends OpenMeteoApiClient {
  constructor(version: OpenMeteoSeasonalApiVersions) {
    super(OPEN_METEO_API_CONFIG.seasonal.baseUrl, version);
  }
}

/**
 * Service for interacting with the Open-Meteo Seasonal Forecast API.
 * Provides long-range predictions (up to 7 months) based on ECMWF SEAS5 and EC46 models.
 * * @remarks
 * Seasonal forecasts are probabilistic. Instead of precise hourly values, 
 * focus on "Anomalies" to understand if a month will be warmer or wetter than 
 * the 30-year climate average.
 */
export class SeasonalForecastService extends SeasonalForecastServiceBase {
  /**
   * Initializes the Seasonal Forecast service using the v1 configuration.
   */
  constructor() {
    super(OPEN_METEO_API_CONFIG.seasonal.versions.v1.number);
  }

  /**
   * Fetches long-range seasonal forecast data.
   * * @remarks
   * - **Resolution**: Native data is 6-hourly. Requesting 1-hourly will use interpolation.
   * - **Ensembles**: By default, provides the ensemble mean. Individual members (51) 
   * can be requested for uncertainty analysis.
   * - **Models**: Utilizes ECMWF SEAS5 (7 months) and EC46 (6 weeks).
   * * @param params - Seasonal parameters including coordinates and ensemble options.
   * @returns A promise resolving to a {@link SeasonalWeatherResponse}.
   * * @example
   * ```typescript
   * const seasonal = await seasonalService.getSeasonalForecast({
   * latitude: 52.52,
   * longitude: 13.41,
   * hourly: ['temperature_2m_anomaly', 'precipitation_anomaly'],
   * models: 'ecmwf_seas5'
   * });
   * ```
   */
  public getSeasonalForecast = (
    params: SeasonalForecastParams,
  ): Promise<SeasonalWeatherResponse> => {
    const formattedParams = {
      ...params,
      hourly: Array.isArray(params.hourly)
        ? params.hourly.join(',')
        : params.hourly,
      daily: Array.isArray(params.daily)
        ? params.daily.join(',')
        : params.daily,
      models: Array.isArray(params.models)
        ? params.models.join(',')
        : params.models,
    };

    return this.instance.get(
      OPEN_METEO_API_CONFIG.seasonal.versions.v1.endpoints.seasonal,
      { params: formattedParams },
    );
  };
}
