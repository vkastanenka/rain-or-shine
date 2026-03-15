// types.ts or -utils.ts
import { type Location } from "@/services";

export const locationHasValidPath = (
  loc: Location,
): loc is Required<Pick<Location, "country_code" | "admin1" | "name">> &
  Location => {
  return !!(loc.country_code && loc.admin1 && loc.name);
};
