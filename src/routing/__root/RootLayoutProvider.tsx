import { createContext } from "react";
import { useRootLayoutContext } from "./hooks";
import type { RootLayoutState, RootLayoutActions } from "./types";

export const StateContext = createContext<RootLayoutState | null>(null);
export const ActionsContext = createContext<RootLayoutActions | null>(null);

export const RootLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { state, actions } = useRootLayoutContext();

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};
