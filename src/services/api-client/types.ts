import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { z } from "zod";

export interface ApiErrorResponse {
  reason?: string;
  message?: string;
}

export interface CustomAxiosInstance extends AxiosInstance {
  validatedGet<T extends z.ZodTypeAny>(
    url: string,
    schema: T,
    config?: AxiosRequestConfig,
  ): Promise<z.infer<T>>;
}
