import { type IconComponent } from "@/components";
import {
  type OpenMeteoForecastCurrentVariables,
  type OpenMeteoForecastDailyListItem,
} from "@/entities";

export type getCurrentWeatherCardPropsParams =
  OpenMeteoForecastCurrentVariables & OpenMeteoForecastDailyListItem;

export interface CurrentWeatherCardProps {
  primaryTemperatureLabel: string;
  secondaryTemperatureLabel: string;
  highTemperatureLabel: string;
  lowTemperatureLabel: string;
  conditionLabel: string;
  ConditionIcon: IconComponent;
}
