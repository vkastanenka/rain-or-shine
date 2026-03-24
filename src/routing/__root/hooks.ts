import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { StateContext, ActionsContext } from "./RootLayoutProvider";
import { ERRORS } from "./constants";

export const useRootLayoutContext = () => {
  /**
   * Context
   */

  const [searchDrawerIsOpen, setSearchDrawerIsOpen] = useState<boolean>(false);

  const location = useRouterState({
    select: (s) => s.location,
  });

  /**
   * Utilities
   */

  const closeSearchDrawer = useCallback(() => {
    if (searchDrawerIsOpen) {
      setSearchDrawerIsOpen(false);
    }
  }, [searchDrawerIsOpen]);

  const openSearchDrawer = useCallback(() => {
    if (!searchDrawerIsOpen) {
      setSearchDrawerIsOpen(true);
    }
  }, [searchDrawerIsOpen]);

  const toggleSearchDrawer = useCallback(
    () => setSearchDrawerIsOpen((prevState) => !prevState),
    [],
  );

  /**
   * Side Effects
   */

  useEffect(() => {
    setSearchDrawerIsOpen(false);
  }, [location.pathname]);

  /**
   * State
   */

  const state = useMemo(() => ({ searchDrawerIsOpen }), [searchDrawerIsOpen]);

  /**
   * Actions
   */

  const actions = useMemo(
    () => ({ closeSearchDrawer, openSearchDrawer, toggleSearchDrawer }),
    [closeSearchDrawer, openSearchDrawer, toggleSearchDrawer],
  );

  return { state, actions };
};

export const useRootLayoutState = () => {
  const context = useContext(StateContext);
  if (!context) throw new Error(ERRORS.stateProviderHookMissingContext);
  return context;
};

export const useRootLayoutActions = () => {
  const context = useContext(ActionsContext);
  if (!context) throw new Error(ERRORS.actionProviderHookMissingContext);
  return context;
};
