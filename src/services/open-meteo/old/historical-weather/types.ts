import { type BaseWeatherParams } from "../base/types";

/**
 * Parameters for requesting historical weather data from the Archive API.
 * Historical data is based on re-analysis models like ERA5 and ERA5-Land.
 */
export interface HistoricalWeatherParams extends BaseWeatherParams {
  /** * The start date for historical data retrieval.
   * Format: YYYY-MM-DD (e.g., '2020-01-01').
   * Note: Data availability depends on the model (ERA5 typically goes back to 1940).
   */
  start_date: string;
  /** * The end date for historical data retrieval.
   * Format: YYYY-MM-DD.
   * Note: This date must be at least 2 days in the past from today.
   */
  end_date: string;
  /** * A list of weather variables to be returned in 6-hourly or hourly resolution.
   * Pass as a string array or a comma-separated string.
   */
  hourly?: string | string[];
  /** * A list of daily weather aggregations (e.g., 'temperature_2m_max', 'precipitation_sum').
   */
  daily?: string | string[];
  /** * Preference for grid-cell selection. 
   * - 'land': Forces selection of a land-based grid cell.
   * - 'sea': Forces selection of an ocean-based grid cell.
   * - 'nearest': Default behavior.
   */
  cell_selection?: 'land' | 'sea' | 'nearest';
  /** * API key for commercial use to access higher rate limits and guaranteed availability.
   */
  apikey?: string;
}
