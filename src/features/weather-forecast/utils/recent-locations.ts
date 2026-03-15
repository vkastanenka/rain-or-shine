import { RECENT_LOCATIONS_KEY } from "../constants";
import { type ValidWeatherPathLocation } from "../types";

const MAX_RECENT = 5;

export const saveRecentLocation = (location: ValidWeatherPathLocation) => {
  const existing = getRecentLocations();

  // Remove duplicate if it exists, then unshift to the front
  const filtered = existing.filter((loc) => loc.id !== location.id);
  const updated = [location, ...filtered].slice(0, MAX_RECENT);

  localStorage.setItem(RECENT_LOCATIONS_KEY, JSON.stringify(updated));
};

export const getRecentLocations = (): ValidWeatherPathLocation[] => {
  const data = localStorage.getItem(RECENT_LOCATIONS_KEY);
  return data ? JSON.parse(data) : [];
};
