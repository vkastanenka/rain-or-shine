import { OpenMeteoApiClient } from '../base/client';
import { OPEN_METEO_API_CONFIG } from '../base/constants';
import {
  type OpenMeteoBaseApiVersions,
  type WeatherResponse,
} from '../base/types';
import { type WeatherForecastParams } from './types';

/**
 * Abstract base class for Weather Forecast services.
 * Configures the client to point to the primary Weather Forecast API.
 * @abstract
 */
abstract class WeatherForecastServiceBase extends OpenMeteoApiClient {
  constructor(version: OpenMeteoBaseApiVersions) {
    super(OPEN_METEO_API_CONFIG.base.baseUrl, version);
  }
}

/**
 * Service for interacting with the Open-Meteo Weather Forecast API.
 * This service provides high-resolution hourly and daily weather forecasts
 * for up to 16 days worldwide.
 * * @remarks
 * Open-Meteo automatically selects the "Best Match" model for your coordinates:
 * - **US/Canada**: Uses HRRR (3km) and NAM models for short-term accuracy.
 * - **Europe**: Uses ICON (2km) and DWD models.
 * - **Global**: Falls back to GFS or ECMWF for long-range and remote areas.
 */
export class WeatherForecastService extends WeatherForecastServiceBase {
  /**
   * Initializes the Weather Forecast service using the v1 configuration.
   */
  constructor() {
    super(OPEN_METEO_API_CONFIG.base.versions.v1.number);
  }

  /**
   * Fetches weather forecast data for specific coordinates.
   * * @remarks
   * - **Data Interpolation**: All data is automatically interpolated to 1-hourly
   * steps, even if the underlying model is 3-hourly.
   * - **Current Weather**: Current conditions are based on 15-minutely model
   * updates for higher precision.
   * * @param params - Forecast parameters including required coordinates and
   * optional variable lists (hourly, daily, current).
   * @returns A promise resolving to a {@link WeatherResponse} containing
   * the requested forecast series.
   * * @example
   * ```typescript
   * const forecast = await forecastService.getForecast({
   * latitude: 52.52,
   * longitude: 13.41,
   * hourly: ['temperature_2m', 'relative_humidity_2m'],
   * current: ['weather_code', 'is_day'],
   * forecast_days: 3
   * });
   * ```
   */
  public getForecast = (params: WeatherForecastParams): Promise<WeatherResponse> => {
    return this.instance.get(
      OPEN_METEO_API_CONFIG.base.versions.v1.endpoints.forecast,
      {
        params: {
          ...params,
          // Open-Meteo prefers arrays to be comma-separated strings
          hourly: Array.isArray(params.hourly)
            ? params.hourly.join(',')
            : params.hourly,
          daily: Array.isArray(params.daily)
            ? params.daily.join(',')
            : params.daily,
          current: Array.isArray(params.current)
            ? params.current.join(',')
            : params.current,
        },
      },
    );
  };
}
