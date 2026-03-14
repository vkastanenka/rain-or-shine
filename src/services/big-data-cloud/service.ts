import { type AxiosRequestConfig } from "axios";
import { BaseApiService, createApiClient } from "@/services/api";
import { API_CONFIG } from "./constants";
import { LocationSchema } from "./schema";
import {
  type LocationByCoordsParams,
  type Location,
  type ApiConfig,
} from "./types";

class BigDataCloudService extends BaseApiService<ApiConfig> {
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

const config = API_CONFIG;

const client = createApiClient(
  { baseURL: config.baseUrl },
  { serviceName: config.name },
);

export const bigDataCloudService = new BigDataCloudService(client, config);
