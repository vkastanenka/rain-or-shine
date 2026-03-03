import {
  formatOpenMeteoValue,
  type OpenMeteoForecastHourlyListItem,
} from "@/entities";
import { FORECAST_DIURNAL_PERIOD_MAP } from "../../constants";
import { getBaseWeatherCardProps, type BaseWeatherCardProps } from "../base-weather-card";

export const getDiurnalPeriodWeatherCardProps = (
  props: OpenMeteoForecastHourlyListItem,
): BaseWeatherCardProps => ({
  ...getBaseWeatherCardProps(props),
  primaryTimeLabel: formatOpenMeteoValue.dayOfWeek(props.time),
  secondaryTimeLabel: formatOpenMeteoValue.monthWithDay(props.time),
  secondaryTemperature: formatOpenMeteoValue.diurnalPeriodApparentTemperature(
    FORECAST_DIURNAL_PERIOD_MAP.Day, // TODO: Obtain from logic
    props.apparent_temperature,
  )
});
