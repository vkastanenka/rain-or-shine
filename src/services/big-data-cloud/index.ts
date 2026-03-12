import { type AxiosInstance } from "axios";
import { createApiClient } from "../api-client";
import { API_CONFIG } from "./constants";
import {
  type ReverseGeocodeParams,
  type ReverseGeocodeResponse,
} from "./types";

export class BigDataCloudService {
  protected instance: AxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: API_CONFIG.baseUrl },
      { serviceName: API_CONFIG.name },
    );
  }

  public reverseGeocode = (
    params?: ReverseGeocodeParams,
  ): Promise<ReverseGeocodeResponse> => {
    return this.instance.get(API_CONFIG.endpoints.reverseGeocode, { params });
  };
}

export const bigDataCloudService = new BigDataCloudService();
