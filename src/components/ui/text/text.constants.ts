import { type TextVariant } from "./text.types";

export const textTypeMap: Record<TextVariant, string> = {
  headline1: "text-h1",
  headline2: "text-h2",
  headline3: "text-h3",
  headline4: "text-h4",
  headline5: "text-h5",
  headline6: "text-h6",
  subtitle1: "text-subtitle1",
  subtitle2: "text-subtitle2",
  body1: "text-body1",
  body2: "text-body2",
  button: "text-button uppercase font-medium",
  caption: "text-caption",
  overline: "text-overline uppercase",
};
