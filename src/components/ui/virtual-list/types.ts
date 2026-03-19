export interface VirtualListProps<T> {
  items: T[];
  estimateSize: number;
  className?: string;
  horizontal?: boolean;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  renderItem: (item: T, index: number) => React.ReactNode;
}
