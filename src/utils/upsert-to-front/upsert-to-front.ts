import { type UpsertToFrontOptions } from "./types";

export const upsertToFront = <T>(
  item: T,
  array: T[],
  { filterKey, max }: UpsertToFrontOptions<T>,
): T[] => {
  const filtered = array.filter((existingItem) => {
    if (filterKey && typeof item === "object" && item !== null) {
      return (existingItem as any)[filterKey] !== (item as any)[filterKey];
    }
    return existingItem !== item;
  });

  const nextArray = [item, ...filtered];

  if (max && max > 0) {
    return nextArray.slice(0, max);
  }

  return nextArray;
};
