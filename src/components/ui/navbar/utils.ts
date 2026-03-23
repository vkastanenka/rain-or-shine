import { type Locality } from "@/services";
import type { NavLink } from "./type";

export const resolveTo = (link: NavLink, locality?: Locality) => {
  return typeof link.to === "function" ? link.to(locality) : link.to;
};
