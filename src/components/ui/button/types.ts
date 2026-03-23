import { type LinkProps } from "@tanstack/react-router";
import { type ResponsiveValue } from "@/utils";
import type { MapKey, MapValue } from "@/types";
import {
  BUTTON_SIZE_MAP,
  BUTTON_COLOR_MAP,
  BUTTON_VARIANT_MAP,
  BUTTON_SHAPE_MAP,
  BUTTON_DISPLAY_MAP,
} from "./constants";

/**
 * Constants
 */

export type ButtonSizeMapKey = MapKey<typeof BUTTON_SIZE_MAP>;
export type ButtonSizeMapValue = MapValue<typeof BUTTON_SIZE_MAP>;

export type ButtonColorMapKey = MapKey<typeof BUTTON_COLOR_MAP>;
export type ButtonColorMapValue = MapValue<typeof BUTTON_COLOR_MAP>;

export type ButtonVariantMapKey = MapKey<typeof BUTTON_VARIANT_MAP>;
export type ButtonVariantMapValue = MapValue<typeof BUTTON_VARIANT_MAP>;

export type ButtonShapeMapKey = MapKey<typeof BUTTON_SHAPE_MAP>;
export type ButtonShapeMapValue = MapValue<typeof BUTTON_SHAPE_MAP>;

export type ButtonDisplayMapKey = MapKey<typeof BUTTON_DISPLAY_MAP>;
export type ButtonDisplayMapValue = MapValue<typeof BUTTON_DISPLAY_MAP>;

/**
 * Components
 */

type HTMLAnchorProps = React.ComponentProps<"a">;
type HTMLButtonProps = React.ComponentProps<"button">;

export interface ButtonStyleProps {
  unstyled?: boolean;
  className?: string;
  size?: ResponsiveValue<ButtonSizeMapKey>;
  color?: ResponsiveValue<ButtonColorMapKey>;
  variant?: ResponsiveValue<ButtonVariantMapKey>;
  shape?: ResponsiveValue<ButtonShapeMapKey>;
  display?: ResponsiveValue<ButtonDisplayMapKey>;
}

export type BaseButtonprops = {
  children: React.ReactNode;
} & ButtonStyleProps;

export type ButtonProps = BaseButtonprops & HTMLButtonProps;
export type ButtonLinkProps = BaseButtonprops & LinkProps;
export type ButtonAnchorProps = BaseButtonprops & HTMLAnchorProps;
