import { z } from "zod";
import { ReverseGeocodeResponseSchema } from "./schema";

export type ReverseGeocodeParams =
  | { latitude: number; longitude: number; localityLanguage?: string }
  | { localityLanguage?: string };

export type ReverseGeocodeResponse = z.infer<
  typeof ReverseGeocodeResponseSchema
>;
