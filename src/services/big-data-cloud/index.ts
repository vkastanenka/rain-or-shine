import axios, { type AxiosInstance } from "axios";
import { BIG_DATA_CLOUD_API_CONFIG } from "./constants";
import {
  type ReverseGeocodingParams,
  type ReverseGeocodingResponse,
} from "./types";

export class BigDataCloudService {
  protected instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BIG_DATA_CLOUD_API_CONFIG.baseUrl,
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
          `[Big Data Cloud API Error] ${error.config?.url}: ${reason}`,
        );
        return Promise.reject(error);
      },
    );
  }

  /**
   * Converts coordinates into a human-readable address.
   */
  public reverseGeocode = (
    params?: ReverseGeocodingParams,
  ): Promise<ReverseGeocodingResponse> => {
    return this.instance.get(
      BIG_DATA_CLOUD_API_CONFIG.endpoints.reverseGeocode,
      { params },
    );
  };
}

export const bigDataCloudService = new BigDataCloudService();
 