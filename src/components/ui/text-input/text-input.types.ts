import { type ResponsiveValue } from "@/utils";
import {
  TEXT_INPUT_SIZE_MAP,
  TEXT_INPUT_COLOR_MAP,
  TEXT_INPUT_VARIANT_MAP,
  TEXT_INPUT_TYPE_MAP,
} from "./text-input.constants";

export type TextInputSizeMapKey = keyof typeof TEXT_INPUT_SIZE_MAP;
export type TextInputSizeMapValue =
  (typeof TEXT_INPUT_SIZE_MAP)[keyof typeof TEXT_INPUT_SIZE_MAP];

export type TextInputColorMapKey = keyof typeof TEXT_INPUT_COLOR_MAP;
export type TextInputColorMapValue =
  (typeof TEXT_INPUT_COLOR_MAP)[keyof typeof TEXT_INPUT_COLOR_MAP];

export type TextInputVariantMapKey = keyof typeof TEXT_INPUT_VARIANT_MAP;
export type TextInputVariantMapValue =
  (typeof TEXT_INPUT_VARIANT_MAP)[keyof typeof TEXT_INPUT_VARIANT_MAP];

export type TextInputTypeMapKey = keyof typeof TEXT_INPUT_TYPE_MAP;
export type TextInputTypeMapValue =
  (typeof TEXT_INPUT_TYPE_MAP)[keyof typeof TEXT_INPUT_TYPE_MAP];

export interface TextInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color" | "type"
> {
  size?: ResponsiveValue<TextInputSizeMapKey>;
  color?: ResponsiveValue<TextInputColorMapKey>;
  variant?: ResponsiveValue<TextInputVariantMapKey>;
  type?: TextInputTypeMapKey;
  suggestions?: { id: string; collection: string[] };
}
