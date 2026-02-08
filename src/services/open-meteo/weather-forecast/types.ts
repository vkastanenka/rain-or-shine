import { type BaseWeatherParams } from '../base/types';

/**
 * Parameters for requesting weather forecasts.
 * * Note: You must provide at least one of 'hourly', 'daily', or 'current'.
 */
export interface ForecastParams extends BaseWeatherParams {
  /** * A list of weather variables for hourly resolution.
   * Can be a string array or a comma-separated string.
   * @example ['temperature_2m', 'relative_humidity_2m', 'rain']
   */
  hourly?: string | string[];

  /** * A list of daily weather aggregations.
   * @example ['weather_code', 'temperature_2m_max', 'sunrise']
   */
  daily?: string | string[];

  /** * A list of weather variables to get current conditions (15-minutely updates).
   */
  current?: string | string[];

  /** * Number of days in the past to include in the response (up to 92 days).
   * Useful for comparing today's forecast with recent actuals.
   * @default 0
   */
  past_days?: number;

  /** * Number of days in the future to forecast (up to 16 days).
   * @default 7
   * @maximum 16
   */
  forecast_days?: number;

  /** * The start date for a specific time interval.
   * Format: YYYY-MM-DD. (Use instead of past_days/forecast_days).
   */
  start_date?: string;

  /** * The end date for a specific time interval.
   * Format: YYYY-MM-DD.
   */
  end_date?: string;

  /** * Manually select weather models instead of the "Best Match" default.
   * @example ['best_match', 'ecmwf_ifs', 'metno_nordic']
   */
  models?: string | string[];

  /** * Preference for how the API selects the weather grid-cell.
   * - 'land': Prefers a grid-cell on land (uses 90m digital elevation model).
   * - 'sea': Prefers an ocean-based grid-cell.
   * - 'nearest': Selects the closest cell regardless of surface type.
   * @default 'land'
   */
  cell_selection?: 'land' | 'sea' | 'nearest';
}
