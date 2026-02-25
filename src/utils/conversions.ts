import convert from "convert";

export const conversions = {
  mmToCm: (mm: number) => convert(mm, "mm").to("cm"),
};
