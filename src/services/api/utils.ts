import axios, { type AxiosRequestConfig, AxiosError, isCancel } from "axios";
import { z } from "zod";
import { type ApiErrorResponse, type CustomAxiosInstance } from "./types";

export const createApiClient = (
  config: AxiosRequestConfig,
  options: { serviceName: string },
): CustomAxiosInstance => {
  const instance = axios.create({
    timeout: 15000,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });

  // Standardize error formatting before it reaches the service layer.
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiErrorResponse>) => {
      // If aborted, don't log the error.
      if (isCancel(error)) {
        return Promise.reject(error);
      }

      const status = error.response?.status;
      const message = error.response?.data?.reason || error.message;

      // TODO: Sentry error handling
      console.error(
        `[${options.serviceName} API Error ${status || "Network"}]: ${message}`,
      );

      return Promise.reject(error);
    },
  );

  // Validated get to ensure app receives expected data.
  const customInstance = instance as any;

  customInstance.validatedGet = async <T extends z.ZodTypeAny>(
    url: string,
    schema: T,
    axiosConfig?: AxiosRequestConfig,
  ): Promise<z.infer<T>> => {
    const response = await instance.get(url, axiosConfig);
    const result = schema.safeParse(response.data);

    if (!result.success) {
      console.error(
        `[${options.serviceName}] Schema Validation Failed at ${url}:`,
        result.error.message,
      );
      throw new Error(
        `Invalid API response structure from ${options.serviceName}`,
      );
    }

    return result.data;
  };

  return customInstance as CustomAxiosInstance;
};
