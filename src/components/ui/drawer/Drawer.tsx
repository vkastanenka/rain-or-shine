import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { AnimatePresence, motion } from "framer-motion";
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
  drawerAriaLabel: string;
  closeBtnAriaLabel: string;
  anchor?: "left" | "right";
  height?: "screen" | "layout";
  width?: "full" | "auto";
  zIndex?: number;
} & HTMLDivProps;

export const Drawer = ({
  isOpen,
  onCloseClick,
  children,
  drawerAriaLabel,
  closeBtnAriaLabel,
  anchor = "right",
  height = "screen",
  width = "auto",
  zIndex = 1000,
  className,
}: DrawerProps) => {
  const anchorIsRight = anchor === "right";
  const heightIsScreen = height === "screen";
  const widthIsFull = width === "full";

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
    "top-0",
    anchorIsRight ? "right-0" : "left-0",
    heightIsScreen ? "h-full" : containedHeightStyles,
    widthIsFull ? "w-full" : containedWidthStyles,
    className,
  );

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onCloseClick();
      };

      const timer = setTimeout(() => {
        const closeBtn = document.querySelector(
          `[aria-label="${closeBtnAriaLabel}"]`,
        ) as HTMLElement;
        closeBtn?.focus();
      }, 100);

      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onCloseClick, closeBtnAriaLabel]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseClick}
            style={{ zIndex: zIndex - 1 }}
            className={cn(
              "fixed inset-0 bg-black/10 backdrop-blur-sm",
              heightIsScreen ? "inset-0" : containedHeightStyles,
            )}
            aria-hidden="true"
          />
          <AnimateSlide
            role="dialog"
            aria-modal="true"
            aria-label={drawerAriaLabel}
            translateXStart={anchorIsRight ? "100%" : "-100%"}
            translateXEnd="0%"
            style={{ zIndex }}
            className={styles}
          >
            <Container>
              <FocusLock returnFocus className="w-full">
                <FlexCol
                  gap={4}
                  className={cn(heightIsScreen ? "py-8" : "py-4")}
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
              </FocusLock>
            </Container>
          </AnimateSlide>
        </>
      )}
    </AnimatePresence>
  );
};
