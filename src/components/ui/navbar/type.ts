import type { IconType } from "react-icons/lib";
import type { Locality } from "@/services";
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
