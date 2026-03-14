import { type AxiosRequestConfig } from "axios";
import { BaseApiService, createApiClient } from "@/services/api";
import { API_CONFIG } from "./constants";
import { ForecastSchema } from "./schema";
import { type Forecast, type GetForecastByCoordsParams } from "./types";

export type V1ApiConfig = typeof API_CONFIG.V1;

class WeatherForecastService extends BaseApiService<V1ApiConfig> {
  public getForecastByCoords = (
    params: GetForecastByCoordsParams,
    config?: AxiosRequestConfig,
  ): Promise<Forecast> => {
    return this.instance.validatedGet(
      this.config.endpoints.forecast,
      ForecastSchema,
      { ...config, params },
    );
  };
}

const config = API_CONFIG.V1;

const client = createApiClient(
  { baseURL: config.baseUrl },
  { serviceName: config.name },
);

export const weatherForecastService = new WeatherForecastService(
  client,
  config,
);
