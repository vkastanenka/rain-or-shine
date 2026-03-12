export interface LocalityInfoRecord {
  name?: string;
  description?: string;
  isoName?: string;
  order?: string;
  adminLevel?: string;
  isoCode?: string;
  wikidataId?: string;
  geonameId?: string;
}

export interface LocalityInfo {
  administrative: LocalityInfoRecord[];
  informative: LocalityInfoRecord[];
}

export type ReverseGeocodeParams =
  | { latitude: number; longitude: number; localityLanguage?: string }
  | { localityLanguage?: string };

export interface ReverseGeocodeResponse {
  latitude: number;
  lookupSource: string;
  longitude: number;
  localityLanguageRequested: string;
  continent: string;
  continentCode: string;
  countryName: string;
  countryCode: string;
  principalSubdivision: string;
  principalSubdivisionCode: string;
  city: string;
  locality: string;
  postcode: string;
  plusCode: string;
  csdCode: string;
  localityInfo: LocalityInfo;
}
