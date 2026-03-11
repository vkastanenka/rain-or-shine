// import {
//   formatOpenMeteoValue,
//   type OpenMeteoForecastCurrentVariables,
// } from "@/entities";
// import type { CurrentDayPressureCardProps } from "./current-day-pressure-card.types";
// import { conversions } from "@/utils";

// export const getCurrentDayPressureCardProps = (
//   params: OpenMeteoForecastCurrentVariables,
// ): CurrentDayPressureCardProps => {
//   const pressure = conversions.hpaToKpa(params.surface_pressure ?? 950);
//   return {
//     pressureLabel: formatOpenMeteoValue.pressure(pressure),
//     pressure: pressure,
//   };
// };
