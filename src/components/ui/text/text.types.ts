export type TextVariant =
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type?: TextVariant;
  element?: TextElement;
  children: React.ReactNode;
  className?: string;
}
