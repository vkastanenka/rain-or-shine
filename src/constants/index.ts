import type { AppRoute } from "@/types";
import { formatInternalLink, formatExternalLink } from "./utils";

/**
 * Accessibility
 */

export const ACCESSIBILITY_LABELS = {
  actions: {
    clearSearchInput: "Clear search input",
    searchDrawer: "Open location search input drawer",
  },
  navigation: {
    home: formatInternalLink("home"),
  },
  social: {
    linkedIn: formatExternalLink("Victoria Kastanenka's LinkedIn"),
    github: formatExternalLink("Victoria Kastanenka's Github"),
    portfolio: formatExternalLink("Victoria Kastanenka's portfolio"),
  },
} as const;

/**
 * Labels
 */

export const LABELS = {
  weather: "Weather",
} as const;

/**
 * Navigation
 */

export const APP_ROUTES = {
  home: { path: "/", label: "Home" },
  maps: { path: "/maps", label: "Maps" },
} as const satisfies Record<string, AppRoute>;

export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/vkastanenka",
  portfolio: "https://www.vkastanenka.com",
  github: "https://github.com/vkastanenka",
} as const;
