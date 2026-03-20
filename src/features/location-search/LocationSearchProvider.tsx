import { createContext } from "react";
import { useLocationSearchContext } from "./hooks";
import type {
  LocationSearchProps,
  LocationSearchState,
  LocationSearchActions,
} from "./types";

export const StateContext = createContext<LocationSearchState | null>(null);
export const ActionsContext = createContext<LocationSearchActions | null>(null);

export const LocationSearchProvider = ({
  children,
  size,
  className,
}: LocationSearchProps & { children: React.ReactNode }) => {
  const { state, actions } = useLocationSearchContext({ size, className });

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};
