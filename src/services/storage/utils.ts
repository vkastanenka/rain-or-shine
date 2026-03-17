import type { ValidWeatherPathLocation } from "@/features";

export const moveLocationToFront = (
  list: ValidWeatherPathLocation[] = [],
  newItem: ValidWeatherPathLocation,
  maxItems = 2,
) => {
  const filtered = list.filter((item) => item.id !== newItem.id);
  return [newItem, ...filtered].slice(0, maxItems);
};
