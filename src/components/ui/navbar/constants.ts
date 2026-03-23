import type { LinkProps } from "@tanstack/react-router";
import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa";
import { formatWeatherUrlPath, FORECAST_PERIOD_MAP } from "@/features";
import { type Locality } from "@/services";
import type { NavLink, SocialLink } from "./type";
import type { ButtonStyleProps } from "../button";

export const LABELS = {
  weather: "Weather",
  maps: "Maps",
} as const;

export const ARIA_LABELS = {
  home: "Navigate to home page",
  search: "Open location search input",
  linkedIn: "Visit Victoria Kastanenka's LinkedIn profile (external link)",
  portfolio: "Visit Victoria Kastanenka's portfolio (external link)",
  github: "Visit Victoria Kastanenka's Github (external link)",
} as const;

const PATHS = {
  home: "/",
  maps: "/maps",
};

const URLS = {
  linkedIn: "https://www.linkedin.com/in/vkastanenka",
  portfolio: "https://www.vkastanenka.com",
  github: "https://github.com/vkastanenka",
} as const;

const WEATHER_NAV_LINK: NavLink = {
  label: LABELS.weather,
  to: (locality?: Locality) =>
    locality
      ? formatWeatherUrlPath({
          countryCode: locality.countryCode,
          region: locality.locality,
          city: locality.city,
          period: FORECAST_PERIOD_MAP.current,
        })
      : (PATHS.home as LinkProps["to"]),
};

const MAPS_NAV_LINK: NavLink = {
  label: LABELS.maps,
  to: PATHS.maps as LinkProps["to"],
};

export const NAV_LINKS: NavLink[] = [WEATHER_NAV_LINK, MAPS_NAV_LINK];

const LINKED_IN_SOCIAL_LINK: SocialLink = {
  href: URLS.linkedIn,
  ariaLabel: ARIA_LABELS.linkedIn,
  Icon: FaLinkedin,
};

const PORTFOLIO_SOCIAL_LINK: SocialLink = {
  href: URLS.portfolio,
  ariaLabel: ARIA_LABELS.portfolio,
  Icon: FaBriefcase,
};

const GITHUB_SOCIAL_LINK: SocialLink = {
  href: URLS.github,
  ariaLabel: ARIA_LABELS.github,
  Icon: FaGithub,
};

export const SOCIAL_LINKS: SocialLink[] = [
  LINKED_IN_SOCIAL_LINK,
  PORTFOLIO_SOCIAL_LINK,
  GITHUB_SOCIAL_LINK,
];

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
