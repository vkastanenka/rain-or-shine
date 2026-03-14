import { z } from "zod";
import { LocationSchema, LocationsSchema } from "./schema";

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
