import axios, { type AxiosInstance } from 'axios';
import { type OpenMeteoBaseUrl, type OpenMeteoVersion } from './types';

/**
 * Base API client for interacting with Open-Meteo services.
 * * This class serves as a wrapper around Axios, providing pre-configured
 * base URLs, versioning, and response interceptors to streamline 
 * weather data retrieval.
 */
export class OpenMeteoApiClient {
  /**
   * The underlying Axios instance used for making HTTP requests.
   * @protected
   */
  protected instance: AxiosInstance;

  /**
   * Creates an instance of the OpenMeteoApiClient.
   * * @param baseUrl - The strictly typed base URL of the specific Open-Meteo service 
   * (e.g., 'https://api.open-meteo.com').
   * @param version - The API version string (e.g., 'v1') as defined in the configuration.
   * * @example
   * ```typescript
   * const client = new OpenMeteoApiClient('https://api.open-meteo.com', 'v1');
   * ```
   */
  constructor(baseUrl: OpenMeteoBaseUrl, version: OpenMeteoVersion) {
    this.instance = axios.create({
      baseURL: `${baseUrl}/${version}`,
    });

    this.initializeInterceptors();
  }

  /**
   * Sets up response interceptors to handle data extraction and error logging.
   * * The interceptor automatically extracts `response.data` on success 
   * and logs a formatted error message to the console on failure.
   * * @private
   */
  private initializeInterceptors(): void {
    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const reason = error.response?.data?.reason || error.message;
        console.error(
          `[OpenMeteo API Error] ${error.config?.url}: ${reason}`
        );
        return Promise.reject(error);
      },
    );
  }
}
