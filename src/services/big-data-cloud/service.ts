import { type AxiosRequestConfig } from "axios";
import { createApiClient, type CustomAxiosInstance } from "../api-client";
import { API_CONFIG } from "./constants";
import { LocationSchema } from "./schema";
import { type LocationByCoordsParams, type Location } from "./types";

class BigDataCloudService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: API_CONFIG.baseUrl },
      { serviceName: API_CONFIG.name },
    );
  }

  public getLocationByCoords = (
    params?: LocationByCoordsParams,
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
