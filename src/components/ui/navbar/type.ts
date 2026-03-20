import type { IconType } from "react-icons/lib";
import type { Locality } from "@/services";
import type { MapKey, MapValue } from "@/types";
import { NAV_BUTTON_VARIANT_MAP } from "./constants";
import type { LinkProps } from "@tanstack/react-router";

/**
 * Constants
 */

export type NavLink = {
  label: string;
  to: LinkProps["to"] | ((locality?: Locality) => LinkProps["to"]);
};

export interface SocialLink {
  href: string;
  ariaLabel: string;
  Icon: IconType;
}

export type NavButtonVariantKey = MapKey<typeof NAV_BUTTON_VARIANT_MAP>;
export type NavButtonVariantValue = MapValue<typeof NAV_BUTTON_VARIANT_MAP>;

/**
 * Components
 */

export interface BaseNavButtonProps {
  children: React.ReactNode;
  ariaLabel?: string;
  variant?: NavButtonVariantValue;
  onClick?: () => void;
}

export type NavButtonProps =
  | BaseNavButtonProps
  | (BaseNavButtonProps & { href: string; to?: never })
  | (BaseNavButtonProps & { to: LinkProps["to"]; href?: never });
