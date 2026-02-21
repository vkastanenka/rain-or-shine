import { Grid as GridRoot } from "./Grid";
import { GridItem } from "./GridItem";
import { type GridProps, type GridItemProps } from "./grid.types";

type GridComponent = React.FC<GridProps> & {
  Item: React.FC<GridItemProps>;
};

export const Grid = Object.assign(GridRoot, {
  Item: GridItem,
}) as GridComponent;

export * from "./grid.constants";
export * from "./grid.types";
