import { useRootLayoutContext } from "./hooks";

/**
 * Context
 */

type RootLayoutContext = ReturnType<typeof useRootLayoutContext>;
export type RootLayoutState = RootLayoutContext["state"];
export type RootLayoutActions = RootLayoutContext["actions"];
