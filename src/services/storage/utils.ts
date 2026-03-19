import { STORAGE_PREFIX } from "./constants";
import type { StorageKey } from "./types";

export const getStorageKey = (key: StorageKey) => `${STORAGE_PREFIX}${key}`;
