import { z } from "zod";
import { WMO_CODE_DESCRIPTION_MAP } from "./constants";
import { type WmoCodeDescriptionMapKey } from "./types";

export const wmoCodeSchema = z
  .number()
  .refine(
    (val): val is WmoCodeDescriptionMapKey => val in WMO_CODE_DESCRIPTION_MAP,
    {
      message: "Invalid WMO weather code",
    },
  );
