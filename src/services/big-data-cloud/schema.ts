import { z } from "zod";

export const LocalityInfoRecordSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  isoName: z.string().optional(),
  order: z.number().optional(),
  adminLevel: z.number().optional(),
  isoCode: z.string().optional(),
  wikidataId: z.string().optional(),
  geonameId: z.number().optional(),
});

export const LocalityInfoSchema = z.object({
  administrative: z.array(LocalityInfoRecordSchema),
  informative: z.array(LocalityInfoRecordSchema),
});

/**
 * Api Res Data
 */

export const LocalitySchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  lookupSource: z.string(),
  localityLanguageRequested: z.string(),
  continent: z.string(),
  continentCode: z.string(),
  countryName: z.string(),
  countryCode: z.string(),
  principalSubdivision: z.string(),
  principalSubdivisionCode: z.string(),
  city: z.string(),
  locality: z.string(),
  postcode: z.string(),
  plusCode: z.string(),
  csdCode: z.string(),
  localityInfo: LocalityInfoSchema,
});
