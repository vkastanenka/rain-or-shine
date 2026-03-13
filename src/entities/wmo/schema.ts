import { z } from "zod";
import { WMO_CODE_DESCRIPTION_MAP } from "./constants";
import { type WmoCodeDescriptionMapValue } from "./types";

export const wmoCodeDescriptionSchema = z.enum(
  Object.values(WMO_CODE_DESCRIPTION_MAP) as WmoCodeDescriptionMapValue[],
);
