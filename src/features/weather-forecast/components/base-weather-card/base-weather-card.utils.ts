// import {
//   formatOpenMeteoValue,
//   type OpenMeteoForecastHourlyListItem,
// } from "@/entities";
// import {
//   getWeatherCardIcon,
//   getWeatherCardPrecipitationProbabilityIcon,
// } from "../../utils";

// export const getBaseWeatherCardProps = (
//   props: OpenMeteoForecastHourlyListItem,
// ) => ({
//   MainIcon: getWeatherCardIcon(props.weather_code, props.is_day),
//   primaryTemperature: formatOpenMeteoValue.temperature(props.temperature_2m),
//   secondaryTemperature: formatOpenMeteoValue.apparentTemperature(
//     props.apparent_temperature,
//   ),
//   precipitationProbability: formatOpenMeteoValue.precipitationProbability(
//     props.precipitation_probability,
//   ),
//   PrecipitationProbabilityIcon: getWeatherCardPrecipitationProbabilityIcon(
//     props.weather_code,
//   ),
//   precipitation: props.precipitation,
//   weatherCode: props.weather_code,
// });
