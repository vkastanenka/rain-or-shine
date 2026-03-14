import { type AxiosRequestConfig } from "axios";
import { BaseApiService, createApiClient } from "@/services/api";
import { API_CONFIG } from "./constants";
import { LocalitySchema } from "./schema";
import { type LocalityByCoordsParams, type Locality } from "./types";

export type ApiConfig = typeof API_CONFIG;

class BigDataCloudService extends BaseApiService<ApiConfig> {
  public getLocalityByCoords = (
    params?: LocalityByCoordsParams,
    config?: AxiosRequestConfig,
  ): Promise<Locality> => {
    return this.instance.validatedGet(
      API_CONFIG.endpoints.reverseGeocode,
      LocalitySchema,
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
