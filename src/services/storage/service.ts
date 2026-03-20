import type { Storage, StorageKey } from "./types";
import { getStorageKey } from "./utils";

const createStorageManager = (engine: globalThis.Storage) => {
  const manager = {
    get: <K extends StorageKey>(key: K): Storage[K] | null => {
      const data = engine.getItem(getStorageKey(key));
      try {
        return data ? (JSON.parse(data) as Storage[K]) : null;
      } catch {
        return null;
      }
    },

    set: <K extends StorageKey>(key: K, value: Storage[K]): Storage[K] => {
      const fullKey = getStorageKey(key);
      engine.setItem(fullKey, JSON.stringify(value));
      window.dispatchEvent(new StorageEvent("storage", { key: fullKey }));
      return value;
    },

    remove: <K extends StorageKey>(key: K): void => {
      engine.removeItem(getStorageKey(key));
      window.dispatchEvent(
        new StorageEvent("storage", { key: getStorageKey(key) }),
      );
    },
  };

  return manager;
};

export const local = createStorageManager(window.localStorage);
export const session = createStorageManager(window.sessionStorage);
