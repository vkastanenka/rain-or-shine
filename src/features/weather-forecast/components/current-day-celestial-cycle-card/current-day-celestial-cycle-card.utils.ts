// import {
//   formatOpenMeteoValue,
//   type OpenMeteoForecastCurrentVariables,
//   type OpenMeteoForecastDailyListItem,
// } from "@/entities";
// import { getCelestialCycleIcon } from "../../utils";
// import type { CurrentDayCelestialCycleCardProps } from "./current-day-celestial-cycle-card.types";

// export const getCurrentDayCelestialCycleCardProps = (
//   params: OpenMeteoForecastCurrentVariables & OpenMeteoForecastDailyListItem,
// ): CurrentDayCelestialCycleCardProps => {
//   let progress = 0;

//   if (params.is_day && params.sunrise && params.sunset) {
//     progress = formatOpenMeteoValue.dayTimeProgress(
//       params.sunrise,
//       params.sunset,
//     );
//   }

//   return {
//     fullDateLabel: formatOpenMeteoValue.fullDate(params.time),
//     Icon: getCelestialCycleIcon(params.sunrise, params.sunset, params.is_day),
//     sunriseTimeLabel: formatOpenMeteoValue.fullTime(params.sunrise),
//     sunsetTimeLabel: formatOpenMeteoValue.fullTime(params.sunset),
//   };
// };
