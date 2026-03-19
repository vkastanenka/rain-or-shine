import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { cn } from "@/utils";
import { type VirtualListProps } from "./types";

export const VirtualList = <T,>({
  items,
  estimateSize,
  className,
  horizontal = false,
  containerRef,
  renderItem,
}: VirtualListProps<T>) => {
  const internalRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => containerRef?.current ?? internalRef.current,
    estimateSize: () => estimateSize,
    horizontal,
    overscan: 0,
  });

  return (
    <div
      ref={internalRef}
      className={cn(
        "w-full relative",
        !containerRef && "overflow-auto",
        className,
      )}
      style={{
        height: containerRef
          ? horizontal
            ? "100%"
            : `${virtualizer.getTotalSize()}px`
          : horizontal
            ? `${estimateSize}px`
            : "100%",
        width:
          containerRef && horizontal ? `${virtualizer.getTotalSize()}px` : "100%",
      }}
    >
      {virtualizer.getVirtualItems().map((virtualRow) => (
        <div
          key={virtualRow.key}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: horizontal ? `${virtualRow.size}px` : "100%",
            height: horizontal ? "100%" : `${virtualRow.size}px`,
            transform: horizontal
              ? `translateX(${virtualRow.start}px)`
              : `translateY(${virtualRow.start}px)`,
          }}
        >
          {renderItem(items[virtualRow.index], virtualRow.index)}
        </div>
      ))}
    </div>
  );
};
