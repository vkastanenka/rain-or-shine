import { type MapType } from "./generate-tailwind-safelist.types";

export const generateTailwindSafelist = (
  maps: MapType[],
  breakpoints = ["sm", "md", "lg", "xl", "2xl"],
): string[] => {
  const baseClasses: string[] = [];

  maps.forEach((map) => {
    Object.values(map).forEach((value) => {
      baseClasses.push(value);

      breakpoints.forEach((bp) => {
        baseClasses.push(`${bp}:${value}`);
      });
    });
  });

  return Array.from(new Set(baseClasses));
};
