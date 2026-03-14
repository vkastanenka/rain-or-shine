export const API_CONFIG = {
  V1: {
    name: "Open Meteo Geocoding v1",
    baseUrl: "https://geocoding-api.open-meteo.com/v1",
    endpoints: { search: "/search" },
  },
} as const;
