import type { ValidWeatherPathLocation } from "@/services";
import { STORAGE_KEY_MAP } from "./constants";
import { local, session } from "./service";

export interface Storage {
  [STORAGE_KEY_MAP.recentLocations]: ValidWeatherPathLocation[];
}

export type StorageKey = keyof Storage;
export type StorageType = "local" | "session";

export type LocalStorageManager = typeof local;
export type SessionStorageManager = typeof session;
