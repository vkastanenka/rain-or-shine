import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaMap } from "@react-icons/all-files/fa/FaMap";
import {
  LABELS,
  APP_ROUTES,
  ACCESSIBILITY_LABELS,
  SOCIAL_LINKS,
} from "@/constants";
import { formatWeatherUrlPath, FORECAST_PERIOD_MAP } from "@/features";
import { type Locality } from "@/services";
import type { NavLink, SocialLink } from "./types";
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
      countryName: locality.countryName,
      region: locality.locality,
      city: locality.city,
      period: FORECAST_PERIOD_MAP.current,
      longitude: locality.longitude,
      latitude: locality.latitude,
    });
  },
  Icon: FaSun,
};

const MAPS_NAV_LINK: NavLink = {
  ...APP_ROUTES.maps,
  Icon: FaMap,
};

export const NAV_LINKS: NavLink[] = [WEATHER_NAV_LINK, MAPS_NAV_LINK];

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
 * Styles
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
