import type { MeteoconIconConfig } from "@/components/ui/icon/types";
import type { WmoCodeDescriptionMapKey } from "@/entities";
import type { IsDayValue } from "@/services";

export interface GetLocationCardPropsParams {
  countryName: string;
  region: string;
  city: string;
  weatherCode: WmoCodeDescriptionMapKey;
  isDay: IsDayValue;
  temperature: number;
  temperatureUnit: string;
}

export interface LocationCardProps {
  city: string;
  region: string;
  iconConfig: MeteoconIconConfig;
  temperature: string;
}
