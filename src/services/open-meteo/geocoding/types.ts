import { z } from "zod";
import { API_CONFIG } from "./constants";
import { LocationSchema, LocationsSchema } from "./schema";

/**
 * Api Config
 */

export type V1ApiConfig = typeof API_CONFIG.V1;

/**
 * Api Req Params
 */

export type GetLocationsByNameParams = {
  name: string;
  count?: number;
  language?: string;
  countryCode?: string;
};

/**
 * Api Res Data
 */

export type Location = z.infer<typeof LocationSchema>;
export type Locations = z.infer<typeof LocationsSchema>;
