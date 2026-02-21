import { type ContainerProps } from "../container";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerProps["maxWidth"];
  px?: ContainerProps["px"];
  children: React.ReactNode;
}
