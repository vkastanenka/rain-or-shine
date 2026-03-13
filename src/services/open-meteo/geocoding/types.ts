import { z } from "zod";
import { LocationSchema, LocationsSchema } from "./schema";

export type GetLocationsByNameParams = {
  name: string;
  count?: number;
  language?: string;
  countryCode?: string;
};

export type Location = z.infer<typeof LocationSchema>;
export type Locations = z.infer<typeof LocationsSchema>;
