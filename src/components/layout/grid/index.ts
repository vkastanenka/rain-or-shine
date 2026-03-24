import { Grid as GridRoot } from "./Grid";
import { GridItem } from "./GridItem";
import type { GridComponent } from "./types";

export const Grid = Object.assign(GridRoot, {
  Item: GridItem,
}) as GridComponent;

export * from "./constants";
export * from "./types";
