import { useRef } from "react";
import { useOnClickOutside } from "@/hooks";
import { cn } from "@/utils";
import { useSearchState, useSearchActions } from "../hooks";
import type { LocationSearchContainerProps } from "../types";

export const LocationSearchContainer = ({ children }: LocationSearchContainerProps) => {
  const { className } = useSearchState();
  const { handleBlur } = useSearchActions();

  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef, handleBlur);

  return (
    <div ref={containerRef} className={cn("relative", "w-full", className)}>
      {children}
    </div>
  );
};
