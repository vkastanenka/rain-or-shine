import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import {
  AnimateSlide,
  Button,
  Container,
  FlexCol,
  FlexRow,
} from "@/components";
import type { HTMLDivProps } from "@/types";
import { cn } from "@/utils";

type DrawerProps = {
  isOpen: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
  closeBtnAriaLabel: string;
  anchor?: "left" | "right";
  heightVariant?: "full" | "contained";
  widthVariant?: "full" | "contained";
} & HTMLDivProps;

export const Drawer = ({
  isOpen,
  onCloseClick,
  children,
  closeBtnAriaLabel,
  anchor = "right",
  heightVariant = "full",
  widthVariant = "contained",
  className,
}: DrawerProps) => {
  const anchorIsRight = anchor === "right";
  const heightVariantIsFull = heightVariant === "full";
  const widthVariantIsFull = widthVariant === "full";

  const containedHeightStyles = cn(
    "top-(--nav-height-base)",
    "sm:top-(--nav-height-sm)",
    "md:top-(--nav-height-md)",
    "lg:top-(--nav-height-lg)",
    "h-[calc(100vh-var(--nav-height-base)-var(--nav-height-base))]",
    "sm:h-[calc(100vh-var(--nav-height-sm))]",
    "md:h-[calc(100vh-var(--nav-height-md))]",
    "lg:h-[calc(100vh-var(--nav-height-lg))]",
  );

  const containedWidthStyles = cn("w-4/5", "sm:w-100", "lg:w-125");

  const styles = cn(
    "bg-base-200",
    "fixed",
    "z-[1000]",
    "top-0",
    anchorIsRight ? "right-0" : "left-0",
    heightVariantIsFull ? "h-full" : containedHeightStyles,
    widthVariantIsFull ? "w-full" : containedWidthStyles,
    className,
  );

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseClick}
            className={cn(
              "fixed inset-0 z-999 backdrop-blur-sm",
              !heightVariantIsFull && containedHeightStyles,
            )}
            aria-hidden="true"
          />
          <AnimateSlide
            translateXStart={anchorIsRight ? "100%" : "-100%"}
            translateXEnd="0%"
            className={styles}
          >
            <Container>
              <FlexCol
                gap={4}
                className={cn(heightVariantIsFull ? "py-8" : "py-4")}
              >
                <FlexRow justify="end" className="w-full">
                  <Button
                    aria-label={closeBtnAriaLabel}
                    onClick={onCloseClick}
                    variant="ghost"
                    shape="circle"
                    color="neutral"
                    size={{ base: "sm", sm: "md", lg: "lg" }}
                  >
                    <FaTimes />
                  </Button>
                </FlexRow>
                {children}
              </FlexCol>
            </Container>
          </AnimateSlide>
        </>
      )}
    </AnimatePresence>
  );
};
