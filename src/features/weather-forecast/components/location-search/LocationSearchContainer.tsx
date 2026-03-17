import { useRef } from "react";
import { useOnClickOutside } from "@/hooks";
import { cn } from "@/utils";
import { useLocationSearch } from "./context";

export const LocationSearchContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    props: { className },
    setIsFocused,
  } = useLocationSearch();

  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef, () => setIsFocused(false));

  return (
    <div ref={containerRef} className={cn("relative", "w-full", className)}>
      {children}
    </div>
  );
};
