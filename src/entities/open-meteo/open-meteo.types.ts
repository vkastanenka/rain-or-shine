import { type WmoCodesMapKey } from "../wmo";

export interface CurrentWeatherData {
  is_day: 0 | 1;
}

export interface HourlyWeatherData {
  time: string;
  temperature_2m: number;
  weather_code: WmoCodesMapKey;
  precipitation_probability: number;
  apparent_temperature: number;
  precipitation: number;
}
