import type { AxiosRequestConfig } from "axios";
import { createApiClient, type CustomAxiosInstance } from "../api-client";
import { API_CONFIG } from "./constants";
import { ReverseGeocodeResponseSchema } from "./schema";
import {
  type ReverseGeocodeParams,
  type ReverseGeocodeResponse,
} from "./types";

export class BigDataCloudService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: API_CONFIG.baseUrl },
      { serviceName: API_CONFIG.name },
    );
  }

  public reverseGeocode = (
    params?: ReverseGeocodeParams,
    config?: AxiosRequestConfig,
  ): Promise<ReverseGeocodeResponse> => {
    return this.instance.validatedGet(
      API_CONFIG.endpoints.reverseGeocode,
      ReverseGeocodeResponseSchema,
      { ...config, params },
    );
  };
}

export const bigDataCloudService = new BigDataCloudService();
