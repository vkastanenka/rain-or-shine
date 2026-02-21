import { cn } from "@/utils";
import { Container } from "../container";
import { type SectionProps } from "./section.types";

export const Section = ({
  maxWidth,
  px,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section className={cn("w-full py-10", className)} {...props}>
      <Container maxWidth={maxWidth} px={px}>
        {children}
      </Container>
    </section>
  );
};
