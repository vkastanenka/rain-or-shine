import type { Storage, StorageKey } from "./types";
import { getStorageKey } from "./utils";

const createStorageManager = (engine: globalThis.Storage) => {
  const manager = {
    get: <K extends StorageKey>(key: K): Storage[K] | undefined => {
      const data = engine.getItem(getStorageKey(key));
      try {
        return data ? (JSON.parse(data) as Storage[K]) : undefined;
      } catch {
        return undefined;
      }
    },

    set: <K extends StorageKey>(key: K, value: Storage[K]): void => {
      const fullKey = getStorageKey(key);
      engine.setItem(fullKey, JSON.stringify(value));
      window.dispatchEvent(new StorageEvent("storage", { key: fullKey }));
    },

    update: <K extends StorageKey>(
      key: K,
      value: any,
      filterKey?: string,
    ): void => {
      const current = manager.get(key);
      let next: any;

      if (Array.isArray(current)) {
        const filtered = current.filter((item) => {
          const itemId =
            typeof item === "object" && filterKey
              ? (item as Record<string, any>)[filterKey]
              : item;

          const valueId =
            typeof value === "object" && filterKey
              ? (value as Record<string, any>)[filterKey]
              : value;

          return itemId !== valueId;
        });

        next = [value, ...filtered];
      } else {
        next = value;
      }

      manager.set(key, next);
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
