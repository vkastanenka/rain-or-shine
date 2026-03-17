import type { ValidWeatherPathLocation } from "@/features";

export interface Storage {
  recentLocations: ValidWeatherPathLocation[];
}

export type StorageKey = keyof Storage;
export type StorageType = "local" | "session";
