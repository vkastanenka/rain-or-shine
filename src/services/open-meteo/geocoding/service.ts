import { type AxiosRequestConfig } from "axios";
import { BaseApiService, createApiClient } from "@/services/api";
import { API_CONFIG } from "./constants";
import { LocationsSchema } from "./schema";
import {
  type GetLocationsByNameParams,
  type Locations,
  type V1ApiConfig,
} from "./types";

class GeocodingService extends BaseApiService<V1ApiConfig> {
  public getLocationsByName = (
    params?: GetLocationsByNameParams,
    config?: AxiosRequestConfig,
  ): Promise<Locations> => {
    return this.instance.validatedGet(
      this.config.endpoints.search,
      LocationsSchema,
      { ...config, params },
    );
  };
}

const config = API_CONFIG.V1;

const client = createApiClient(
  { baseURL: config.baseUrl },
  { serviceName: config.name },
);

export const geocodingService = new GeocodingService(client, config);
