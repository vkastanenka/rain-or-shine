import { type AxiosRequestConfig } from "axios";
import {
  createApiClient,
  type CustomAxiosInstance,
} from "@/services/api-client";
import { API_CONFIG } from "../constants";
import { LocationsSchema } from "./schema";
import { type LocationsByNameParams, type Locations } from "./types";

class GeocodingService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: API_CONFIG.GEOCODING.V1.baseUrl },
      { serviceName: API_CONFIG.GEOCODING.V1.name },
    );
  }

  public getLocationsByName = (
    params?: LocationsByNameParams,
    config?: AxiosRequestConfig,
  ): Promise<Locations> => {
    return this.instance.validatedGet(
      API_CONFIG.GEOCODING.V1.endpoints.search,
      LocationsSchema,
      { ...config, params },
    );
  };
}

export const geocodingService = new GeocodingService();
