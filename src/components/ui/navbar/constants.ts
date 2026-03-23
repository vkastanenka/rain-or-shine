import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  LABELS,
  APP_ROUTES,
  ACCESSIBILITY_LABELS,
  SOCIAL_LINKS,
} from "@/constants";
import { formatWeatherUrlPath, FORECAST_PERIOD_MAP } from "@/features";
import { type Locality } from "@/services";
import type { NavLink, SocialLink } from "./type";
import type { ButtonStyleProps } from "../button";

/**
 * Links
 */

// app

const WEATHER_NAV_LINK: NavLink = {
  label: LABELS.weather,
  path: (locality?: Locality) => {
    if (!locality) return APP_ROUTES.home.path;

    return formatWeatherUrlPath({
      countryCode: locality.countryCode,
      region: locality.locality,
      city: locality.city,
      period: FORECAST_PERIOD_MAP.current,
    });
  },
};

export const NAV_LINKS: NavLink[] = [WEATHER_NAV_LINK, APP_ROUTES.maps];

// social

const SOCIAL_CONFIG = [
  { key: "linkedIn", icon: FaLinkedin },
  { key: "portfolio", icon: FaBriefcase },
  { key: "github", icon: FaGithub },
] as const;

export const NAV_SOCIAL_LINKS: SocialLink[] = SOCIAL_CONFIG.map(
  ({ key, icon }) => ({
    href: SOCIAL_LINKS[key],
    ariaLabel: ACCESSIBILITY_LABELS.social[key],
    Icon: icon,
  }),
);

/**
 * STYLES
 */

const BASE_BUTTON_STYLES = {
  variant: "ghost",
  color: "neutral",
} as const satisfies ButtonStyleProps;

export const ICON_BUTTON_STYLES = {
  ...BASE_BUTTON_STYLES,
  shape: "circle",
  size: { base: "sm", sm: "md", lg: "lg" },
} as const satisfies ButtonStyleProps;

export const TEXT_BUTTON_STYLES = {
  ...BASE_BUTTON_STYLES,
  size: { base: "md", lg: "lg" },
} as const satisfies ButtonStyleProps;
