import { type ResponsiveValue } from "@/utils";
import {
  TEXT_INPUT_SIZE_MAP,
  TEXT_INPUT_COLOR_MAP,
  TEXT_INPUT_VARIANT_MAP,
  TEXT_INPUT_TYPE_MAP,
} from "./constants";
import type { MapKey, MapValue } from "@/types";

/**
 * Constants
 */

export type TextInputSizeMapKey = MapKey<typeof TEXT_INPUT_SIZE_MAP>;
export type TextInputSizeMapValue = MapValue<typeof TEXT_INPUT_SIZE_MAP>;

export type TextInputColorMapKey = MapKey<typeof TEXT_INPUT_COLOR_MAP>;
export type TextInputColorMapValue = MapValue<typeof TEXT_INPUT_COLOR_MAP>;

export type TextInputVariantMapKey = MapKey<typeof TEXT_INPUT_VARIANT_MAP>;
export type TextInputVariantMapValue = MapValue<typeof TEXT_INPUT_VARIANT_MAP>;

export type TextInputTypeMapKey = MapKey<typeof TEXT_INPUT_TYPE_MAP>;
export type TextInputTypeMapValue = MapValue<typeof TEXT_INPUT_TYPE_MAP>;

/**
 * Components
 */

export interface TextInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "type"
> {
  size?: ResponsiveValue<TextInputSizeMapKey>;
  color?: ResponsiveValue<TextInputColorMapKey>;
  variant?: ResponsiveValue<TextInputVariantMapKey>;
  type?: TextInputTypeMapKey;
  suggestions?: { id: string; collection: string[] };
  onClear?: () => void;
}
