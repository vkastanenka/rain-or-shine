import type { MapKey, MapValue, HTMLElementProps } from "@/types";
import { type ResponsiveValue } from "@/utils";
import { TEXT_TYPE_MAP } from "./constants";

/**
 * Constants
 */

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TextTypeMapKey = MapKey<typeof TEXT_TYPE_MAP>;
export type TextTypeMapValue = MapValue<typeof TEXT_TYPE_MAP>;

/**
 * Components
 */

export interface TextProps extends HTMLElementProps {
  children: React.ReactNode;
  element?: TextElement;
  type?: ResponsiveValue<TextTypeMapKey>;
}
