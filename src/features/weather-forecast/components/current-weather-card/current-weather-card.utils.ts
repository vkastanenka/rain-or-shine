// import { formatOpenMeteoValue } from "@/entities";
// import { getWeatherCardIcon } from "../../utils";
// import { type getCurrentWeatherCardPropsParams } from "./current-weather-card.types";

// export const getCurrentWeatherCardProps = (
//   params: getCurrentWeatherCardPropsParams,
// ) => ({
//   primaryTemperatureLabel: formatOpenMeteoValue.temperatureWithUnit(
//     params.temperature_2m,
//   ),
//   secondaryTemperatureLabel: formatOpenMeteoValue.apparentTemperature(
//     params.apparent_temperature,
//   ),
//   highTemperatureLabel: formatOpenMeteoValue.highTemperature(
//     params.temperature_2m_max,
//   ),
//   lowTemperatureLabel: formatOpenMeteoValue.lowTemperature(
//     params.temperature_2m_min,
//   ),
//   conditionLabel: formatOpenMeteoValue.conditionDescription(
//     params.weather_code,
//   ),
//   ConditionIcon: getWeatherCardIcon(params.weather_code, params.is_day),
// });
