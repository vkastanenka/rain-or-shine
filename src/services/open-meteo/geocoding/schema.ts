import { z } from "zod";

export const LocationSchema = z.object({
  id: z.number(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  elevation: z.number().optional(),
  timezone: z.string().optional(),
  feature_code: z.string().optional(),
  country_code: z.string().optional(),
  country: z.string().optional(),
  country_id: z.number().optional(),
  population: z.number().optional(),
  postcodes: z.array(z.string()).optional(),
  admin1: z.string().optional(),
  admin2: z.string().optional(),
  admin3: z.string().optional(),
  admin4: z.string().optional(),
  admin1_id: z.number().optional(),
  admin2_id: z.number().optional(),
  admin3_id: z.number().optional(),
  admin4_id: z.number().optional(),
});

export const LocationsSchema = z.object({
  results: z.array(LocationSchema).optional().default([]),
  generationtime_ms: z.number().optional(),
});
