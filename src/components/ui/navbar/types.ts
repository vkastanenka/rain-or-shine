import type { IconType } from "react-icons/lib";
import type { Locality } from "@/services";
import type { LinkProps } from "@tanstack/react-router";
import type { HTMLNavProps } from "@/types";

/**
 * Constants
 */

export type NavLink = {
  label: string;
  path: LinkProps["to"] | ((locality?: Locality) => LinkProps["to"]);
  Icon: IconType;
};

export interface SocialLink {
  href: string;
  ariaLabel: string;
  Icon: IconType;
}

/**
 * Components
 */

export type NavContainerProps = {
  children: React.ReactNode;
  position?: "top" | "bottom";
} & HTMLNavProps;
