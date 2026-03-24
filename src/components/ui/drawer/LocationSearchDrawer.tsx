import { ACCESSIBILITY_LABELS } from "@/constants";
import { LocationSearch } from "@/features";
import { useRootLayoutState, useRootLayoutActions } from "@/routing";
import { Drawer } from "./Drawer";

export const LocationSearchDrawer = () => {
  const { searchDrawerIsOpen } = useRootLayoutState();
  const { closeSearchDrawer } = useRootLayoutActions();

  return (
    <Drawer
      heightVariant="contained"
      widthVariant="contained"
      isOpen={searchDrawerIsOpen}
      onCloseClick={closeSearchDrawer}
      closeBtnAriaLabel={ACCESSIBILITY_LABELS.actions.closeSearchDrawer}
    >
      <LocationSearch />
    </Drawer>
  );
};
