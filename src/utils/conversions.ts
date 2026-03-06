import convert from "convert";

export const conversions = {
  mmToCm: (mm: number) => convert(mm, "mm").to("cm"),
  hpaToKpa: (hpa: number) => hpa / 10,
};
