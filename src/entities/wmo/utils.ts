import { WMO_RAIN_CODE_DESCRIPTION_MAP, WMO_SNOW_CODE_DESCRIPTION_MAP } from "./constants";
import { type WmoCodeDescriptionMapKey } from "./types";

export const wmoCodeIsRain = (
  key: WmoCodeDescriptionMapKey,
): key is keyof typeof WMO_RAIN_CODE_DESCRIPTION_MAP => key in WMO_RAIN_CODE_DESCRIPTION_MAP;

export const wmoCodeIsSnow = (
  key: WmoCodeDescriptionMapKey,
): key is keyof typeof WMO_SNOW_CODE_DESCRIPTION_MAP => key in WMO_SNOW_CODE_DESCRIPTION_MAP;
