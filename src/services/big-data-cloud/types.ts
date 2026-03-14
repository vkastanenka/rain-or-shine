import { z } from "zod";
import { API_CONFIG } from "./constants";
import { LocationSchema } from "./schema";

/**
 * Api Config
 */

export type ApiConfig = typeof API_CONFIG;

/**
 * Api Req Params
 */

export type LocationByCoordsParams = {
  latitude: number;
  longitude: number;
  localityLanguage?: string;
};

/**
 * Api Res Data
 */

export type Location = z.infer<typeof LocationSchema>;
