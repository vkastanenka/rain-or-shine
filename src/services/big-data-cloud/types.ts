import { z } from "zod";
import { LocationSchema } from "./schema";

export type LocationByCoordsParams = {
  latitude: number;
  longitude: number;
  localityLanguage?: string;
};

export type Location = z.infer<typeof LocationSchema>;
