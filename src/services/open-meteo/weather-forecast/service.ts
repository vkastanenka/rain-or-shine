import {
  createApiClient,
  type CustomAxiosInstance,
} from "@/services/api-client";
import { API_CONFIG } from "../constants";

class WeatherForecastService {
  protected instance: CustomAxiosInstance;

  constructor() {
    this.instance = createApiClient(
      { baseURL: API_CONFIG.GEOCODING.V1.baseUrl },
      { serviceName: API_CONFIG.WEATHER_FORECAST.V1.name },
    );
  }
}

export const weatherForecastService = new WeatherForecastService();
