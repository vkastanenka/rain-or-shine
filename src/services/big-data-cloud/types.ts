import { z } from "zod";
import { LocationSchema } from "./schema";

export type LocationCoordsParams = {
  latitude: number;
  longitude: number;
  localityLanguage?: string;
};

export type Location = z.infer<typeof LocationSchema>;
