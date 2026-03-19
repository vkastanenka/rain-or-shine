import type { ValidWeatherPathLocation } from "@/features";
import { STORAGE_KEY_MAP } from "./constants";

export interface Storage {
  [STORAGE_KEY_MAP.recentLocations]: ValidWeatherPathLocation[];
}

export type StorageKey = keyof Storage;
export type StorageType = "local" | "session";
