import { TEXT_TYPE_MAP } from "./text.constants";

export type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TextTypeMapKey = keyof typeof TEXT_TYPE_MAP;
export type TextTypeMapValue =
  (typeof TEXT_TYPE_MAP)[keyof typeof TEXT_TYPE_MAP];

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  element?: TextElement;
  type?: TextTypeMapKey;
  className?: string;
  children: React.ReactNode;
}
