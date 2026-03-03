import {
  formatOpenMeteoValue,
  type OpenMeteoHourlyForecastByDiurnalPeriodListItem,
} from "@/entities";
import { FORECAST_DIURNAL_PERIOD_MAP } from "../../constants";
import {
  getBaseWeatherCardProps,
  type BaseWeatherCardProps,
} from "../base-weather-card";

export const getDiurnalPeriodWeatherCardProps = (
  props: OpenMeteoHourlyForecastByDiurnalPeriodListItem,
): BaseWeatherCardProps => ({
  ...getBaseWeatherCardProps(props.diurnalPeriodItems[0]),
  primaryTimeLabel: formatOpenMeteoValue.dayOfWeek(props.time),
  secondaryTimeLabel: formatOpenMeteoValue.monthWithDay(props.time),
  secondaryTemperature: formatOpenMeteoValue.diurnalPeriodApparentTemperature(
    FORECAST_DIURNAL_PERIOD_MAP.Night,
    props.diurnalPeriodItems[1].apparent_temperature,
  ),
});
