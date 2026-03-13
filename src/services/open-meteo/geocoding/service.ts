import { type AxiosRequestConfig } from "axios";
import {
  createApiClient,
  type CustomAxiosInstance,
} from "@/services/api-client";
import { API_CONFIG } from "../constants";
import { LocationsSchema } from "./schema";
import { type GetLocationsByNameParams, type Locations } from "./types";

const { GEOCODING: GEOCODING_API_CONFIG } = API_CONFIG;

class GeocodingService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: GEOCODING_API_CONFIG.V1.baseUrl },
      { serviceName: GEOCODING_API_CONFIG.V1.name },
    );
  }

  public getLocationsByName = (
    params?: GetLocationsByNameParams,
    config?: AxiosRequestConfig,
  ): Promise<Locations> => {
    return this.instance.validatedGet(
      GEOCODING_API_CONFIG.V1.endpoints.search,
      LocationsSchema,
      { ...config, params },
    );
  };
}

export const geocodingService = new GeocodingService();
