import { Container, FlexRow } from "@/components/layout";
import { cn } from "@/utils";
import type { NavContainerProps } from "./types";

export const NavContainer = ({
  position = "top",
  children,
  className,
}: NavContainerProps) => {
  const isPositionTop = position === "top";
  return (
    <nav
      className={cn(
        "w-full",
        "bg-base-300",
        "py-3",
        isPositionTop ? "sticky" : "fixed",
        isPositionTop ? "top-0" : "bottom-0",
        className,
      )}
    >
      <Container>
        <FlexRow gap={2} align="center" justify="between">
          {children}
        </FlexRow>
      </Container>
    </nav>
  );
};
