import { type IconComponent } from "@/components";
import type {
  OpenMeteoPrecipitationVariable,
  OpenMeteoWeatherCodeVariable,
} from "@/entities";

export interface BaseWeatherCardProps {
  primaryTimeLabel: string;
  secondaryTimeLabel?: string;
  MainIcon: IconComponent;
  primaryTemperature: string;
  secondaryTemperature: string;
  precipitationProbability: string;
  PrecipitationProbabilityIcon: IconComponent;
  precipitation: OpenMeteoPrecipitationVariable;
  weatherCode: OpenMeteoWeatherCodeVariable;
}
