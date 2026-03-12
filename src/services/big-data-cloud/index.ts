import { type AxiosInstance } from "axios";
import { createApiClient } from "../api-client";
import { BIG_DATA_CLOUD_API_CONFIG } from "./constants";
import {
  type ReverseGeocodingParams,
  type ReverseGeocodingResponse,
} from "./types";

export class BigDataCloudService {
  protected instance: AxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: BIG_DATA_CLOUD_API_CONFIG.baseUrl },
      { serviceName: BIG_DATA_CLOUD_API_CONFIG.name },
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
