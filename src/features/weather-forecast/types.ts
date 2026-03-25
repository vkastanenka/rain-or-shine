import { type Location } from "@/services";
import type { MapKey, MapValue } from "@/types";
import { FORECAST_PERIOD_MAP } from "./constants";

export type ForecastPeriodMapKey = MapKey<typeof FORECAST_PERIOD_MAP>;
export type ForecastPeriodMapValue = MapValue<typeof FORECAST_PERIOD_MAP>;

export type ValidWeatherPathLocation = Location & {
  country_code: string;
  admin1: string;
  name: string;
};

export interface WeatherUrlPathParams {
  countryName: string;
  region: string;
  city: string;
  period: ForecastPeriodMapKey;
  longitude: number;
  latitude: number;
}
