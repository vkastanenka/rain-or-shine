import type { Storage, StorageKey } from "./types";

const PREFIX = "ros_";

const createStorageManager = (engine: globalThis.Storage) => ({
  get: <K extends StorageKey>(key: K): Storage[K] | undefined => {
    const data = engine.getItem(`${PREFIX}${key}`);
    try {
      return data ? (JSON.parse(data) as Storage[K]) : undefined;
    } catch {
      return undefined;
    }
  },

  set: <K extends StorageKey>(key: K, value: Storage[K]): void => {
    const fullKey = `${PREFIX}${key}`;
    engine.setItem(fullKey, JSON.stringify(value));
    window.dispatchEvent(new StorageEvent("storage", { key: fullKey }));
  },

  remove: (key: StorageKey): void => {
    engine.removeItem(`${PREFIX}${key}`);
    window.dispatchEvent(
      new StorageEvent("storage", { key: `${PREFIX}${key}` }),
    );
  },
});

export const local = createStorageManager(window.localStorage);
export const session = createStorageManager(window.sessionStorage);
