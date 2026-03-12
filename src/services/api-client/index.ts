import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  AxiosError,
} from "axios";
import { type ApiErrorResponse } from "./types";

export * from "./types";

export const createApiClient = (
  config: AxiosRequestConfig,
  options: { serviceName: string },
): AxiosInstance => {
  const instance = axios.create({
    timeout: 15000,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError<ApiErrorResponse>) => {
      const status = error.response?.status;
      const message = error.response?.data?.reason || error.message;

      // Sentry / LogRocket error handling?
      console.error(
        `[${options.serviceName} API Error ${status || "Network"}]: ${message}`,
      );

      return Promise.reject(error);
    },
  );

  return instance;
};
