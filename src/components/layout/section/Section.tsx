import { cn, resolveResponsiveValues } from "@/utils";
import { Container } from "../container";
import { SECTION_PADDING_MAP } from "./constants";
import { type SectionProps } from "./types";

export const Section = ({
  maxWidth,
  px,
  py = { sm: 10 },
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        "w-full",
        resolveResponsiveValues(py, SECTION_PADDING_MAP),
        className,
      )}
      {...props}
    >
      <Container maxWidth={maxWidth} px={px}>
        {children}
      </Container>
    </section>
  );
};
