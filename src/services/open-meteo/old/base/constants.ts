export const API_CONFIG = {
  WEATHER_FORECAST: {
    V1: {
      name: "Open Meteo Weather Forecast v1",
      baseUrl: "https://api.open-meteo.com/v1",
      endpoints: { forecast: "/forecast" },
    },
  },
  HISTORICAL_WEATHER: {
    V1: {
      name: "Open Meteo Historical Weather v1",
      baseUrl: "https://archive-api.open-meteo.com/v1",
      endpoints: { archive: "/archive" },
    },
  },
  SEASONAL_FORECAST: {
    V1: {
      name: "Open Meteo Seasonal Forecast v1",
      baseUrl: "https://seasonal-api.open-meteo.com/v1",
      endpoints: { seasonal: "/seasonal" },
    },
  },
  GEOCODING: {
    V1: {
      name: "Open Meteo Geocoding v1",
      baseUrl: "https://geocoding-api.open-meteo.com/v1",
      endpoints: { search: "/search" },
    },
  },
} as const;
