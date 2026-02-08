import { type BaseWeatherParams, type WeatherResponse } from '../base/types';

export interface SeasonalForecastParams extends BaseWeatherParams {
  /** * A list of weather variables. Native resolution is 6-hourly.
   * Can include anomalies (e.g., "temperature_2m_anomaly")
   */
  hourly?: string | string[];

  /** Daily weather aggregations */
  daily?: string | string[];

  /** * If set to true, returns 51 individual ensemble members
   * instead of just the ensemble mean.
   */
  models?: 'seamless' | 'ecmwf_ifs' | 'ecmwf_seas5' | string | string[];

  /** * Forecast for the next months (up to 7) or weeks (up to 6).
   * Usually handled via the variables requested.
   */
  aspect?: 'forecast' | 'anomaly' | 'efi' | 'sot';
}

export interface SeasonalWeatherResponse extends WeatherResponse {
  hourly?: WeatherResponse['hourly'] & {
    // Some variables might return a 2D array if multiple ensembles are requested
    [key: string]: (number | string)[] | (number | string)[][];
  };
}
