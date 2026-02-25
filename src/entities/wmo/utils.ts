import { WMO_RAIN_CODES_MAP, WMO_SNOW_CODES_MAP } from "./constants";
import { type WmoCodesMapKey } from "./types";

export const isWmoCodeRain = (
  key: WmoCodesMapKey,
): key is keyof typeof WMO_RAIN_CODES_MAP => key in WMO_RAIN_CODES_MAP;

export const isWmoCodeSnow = (
  key: WmoCodesMapKey,
): key is keyof typeof WMO_SNOW_CODES_MAP => key in WMO_SNOW_CODES_MAP;
