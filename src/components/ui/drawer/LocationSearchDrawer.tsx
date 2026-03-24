import { ACCESSIBILITY_LABELS } from "@/constants";
import { LocationSearch } from "@/features";
import { useRootLayoutState, useRootLayoutActions } from "@/routing";
import { Drawer } from "./Drawer";

export const LocationSearchDrawer = () => {
  const { searchDrawerIsOpen } = useRootLayoutState();
  const { closeSearchDrawer } = useRootLayoutActions();

  return (
    <Drawer
      height="layout"
      width="full"
      isOpen={searchDrawerIsOpen}
      onCloseClick={closeSearchDrawer}
      drawerAriaLabel={ACCESSIBILITY_LABELS.components.searchDrawer}
      closeBtnAriaLabel={ACCESSIBILITY_LABELS.actions.closeSearchDrawer}
    >
      <LocationSearch />
    </Drawer>
  );
};
