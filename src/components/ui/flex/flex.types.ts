import { type ResponsiveValue } from "@/utils";

export type FlexAlign = "start" | "end" | "center" | "baseline" | "stretch";

export type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";

export type FlexGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

export type FlexJustify =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ResponsiveValue<FlexDirection>;
  justify?: ResponsiveValue<FlexJustify>;
  align?: ResponsiveValue<FlexAlign>;
  gap?: ResponsiveValue<FlexGap>;
  wrap?: ResponsiveValue<boolean>;
  children: React.ReactNode;
}
