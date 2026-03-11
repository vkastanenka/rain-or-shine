import { type LinkProps } from "@tanstack/react-router";
import { type ResponsiveValue } from "@/utils";
import {
  BUTTON_SIZE_MAP,
  BUTTON_COLOR_MAP,
  BUTTON_VARIANT_MAP,
  BUTTON_SHAPE_MAP,
  BUTTON_DISPLAY_MAP,
} from "./button.constants";

export type ButtonSizeMapKey = keyof typeof BUTTON_SIZE_MAP;
export type ButtonSizeMapValue =
  (typeof BUTTON_SIZE_MAP)[keyof typeof BUTTON_SIZE_MAP];

export type ButtonColorMapKey = keyof typeof BUTTON_COLOR_MAP;
export type ButtonColorMapValue =
  (typeof BUTTON_COLOR_MAP)[keyof typeof BUTTON_COLOR_MAP];

export type ButtonVariantMapKey = keyof typeof BUTTON_VARIANT_MAP;
export type ButtonVariantMapValue =
  (typeof BUTTON_VARIANT_MAP)[keyof typeof BUTTON_VARIANT_MAP];

export type ButtonShapeMapKey = keyof typeof BUTTON_SHAPE_MAP;
export type ButtonShapeMapValue =
  (typeof BUTTON_SHAPE_MAP)[keyof typeof BUTTON_SHAPE_MAP];

export type ButtonDisplayMapKey = keyof typeof BUTTON_DISPLAY_MAP;
export type ButtonDisplayMapValue =
  (typeof BUTTON_DISPLAY_MAP)[keyof typeof BUTTON_DISPLAY_MAP];

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  size?: ResponsiveValue<ButtonSizeMapKey>;
  color?: ResponsiveValue<ButtonColorMapKey>;
  variant?: ResponsiveValue<ButtonVariantMapKey>;
  shape?: ResponsiveValue<ButtonShapeMapKey>;
  display?: ResponsiveValue<ButtonDisplayMapKey>;
  unstyled?: boolean;
}

export type ButtonProps =
  | (BaseProps & { href: string; to?: never; onClick?: never })
  | (BaseProps & {
      to: LinkProps["to"];
      href?: never;
      onClick?: never;
    } & LinkProps)
  | (BaseProps & { onClick?: () => void; to?: never; href?: never });
