import { type Locality } from "@/services";
import type { NavLink } from "./types";

export const resolveTo = (link: NavLink, locality?: Locality) => {
  return typeof link.path === "function" ? link.path(locality) : link.path;
};
