import type { AxiosRequestConfig } from "axios";
import { createApiClient, type CustomAxiosInstance } from "../api-client";
import { API_CONFIG } from "./constants";
import { LocationSchema } from "./schema";
import { type LocationCoordsParams, type Location } from "./types";

export class BigDataCloudService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: API_CONFIG.baseUrl },
      { serviceName: API_CONFIG.name },
    );
  }

  public getLocationByCoords = (
    params?: LocationCoordsParams,
    config?: AxiosRequestConfig,
  ): Promise<Location> => {
    return this.instance.validatedGet(
      API_CONFIG.endpoints.reverseGeocode,
      LocationSchema,
      { ...config, params },
    );
  };
}

export const bigDataCloudService = new BigDataCloudService();
