import { z } from "zod";
import { LocalitySchema } from "./schema";

/**
 * Api Req Params
 */

export type LocalityByCoordsParams = {
  latitude: number;
  longitude: number;
  localityLanguage?: string;
};

/**
 * Api Res Data
 */

export type Locality = z.infer<typeof LocalitySchema>;
