import type { AxiosRequestConfig } from "axios";
import {
  createApiClient,
  type CustomAxiosInstance,
} from "@/services/api-client";
import { API_CONFIG } from "../constants";
import type { Forecast, GetForecastByCoordsParams } from "./types";
import { ForecastSchema } from "./schema";

const { WEATHER_FORECAST: WEATHER_FORECAST_API_CONFIG } = API_CONFIG;

class WeatherForecastService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: WEATHER_FORECAST_API_CONFIG.V1.baseUrl },
      { serviceName: WEATHER_FORECAST_API_CONFIG.V1.name },
    );
  }

  public getForecastByCoords = (
    params?: GetForecastByCoordsParams,
    config?: AxiosRequestConfig,
  ): Promise<Forecast> => {
    return this.instance.validatedGet(
      WEATHER_FORECAST_API_CONFIG.V1.endpoints.forecast,
      ForecastSchema,
      { ...config, params },
    );
  };
}

export const weatherForecastService = new WeatherForecastService();
