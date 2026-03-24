import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { AnimateSlide, Button, FlexCol, FlexRow, Section } from "@/components";
import { LocationSearch } from "@/features";
import { useRootLayoutState, useRootLayoutActions } from "@/routing";
import { cn } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { ACCESSIBILITY_LABELS } from "@/constants";

export const Drawer = () => {
  const { searchDrawerIsOpen } = useRootLayoutState();
  const { closeSearchDrawer } = useRootLayoutActions();

  const styles = cn(
    "bg-base-100",
    "fixed",
    "z-(--search-drawer-z)",
    "w-full",
    "left-0",
    "top-(--nav-height-base)",
    "sm:top-(--nav-height-sm)",
    "md:top-(--nav-height-md)",
    "lg:top-(--nav-height-lg)",
    "h-[calc(100vh-var(--nav-height-base)-var(--nav-height-base))]",
    "sm:h-[calc(100vh-var(--nav-height-sm))]",
    "md:h-[calc(100vh-var(--nav-height-md))]",
    "lg:h-[calc(100vh-var(--nav-height-lg))]",
  );

  return (
    <AnimatePresence>
      {searchDrawerIsOpen && (
        <AnimateSlide
          translateXStart={"100%"}
          translateXEnd={"0%"}
          className={styles}
        >
          <Section>
            <FlexCol gap={{ base: 2, sm: 6 }}>
              <FlexRow justify="end" className="w-full">
                <Button
                  aria-label={ACCESSIBILITY_LABELS.actions.closeSearchDrawer}
                  onClick={closeSearchDrawer}
                  variant="ghost"
                  shape="circle"
                  color="neutral"
                >
                  <FaTimes className="w-4 h-4" />
                </Button>
              </FlexRow>
              <LocationSearch />
            </FlexCol>
          </Section>
        </AnimateSlide>
      )}
    </AnimatePresence>
  );
};

// export const Drawer = ({ isOpen, onClose, children, title }: any) => {
//   // Close on 'Escape' key press
//   useEffect(() => {
//     const handleEsc = (event: any) => {
//       if (event.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   if (!isOpen) return null;

//   <div className="drawer-overlay" onClick={onClose}>
//     <div
//       className={`drawer-content ${isOpen ? "open" : ""}`}
//       onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
//     >
//       <div className="drawer-header">
//         <h2>{title}</h2>
//         <button onClick={onClose}>&times;</button>
//       </div>
//       <div className="drawer-body">{children}</div>
//     </div>
//   </div>;
// };

//   return ReactDOM.createPortal(
//     <div className="drawer-overlay" onClick={onClose}>
//       <div
//         className={`drawer-content ${isOpen ? "open" : ""}`}
//         onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
//       >
//         <div className="drawer-header">
//           <h2>{title}</h2>
//           <button onClick={onClose}>&times;</button>
//         </div>
//         <div className="drawer-body">{children}</div>
//       </div>
//     </div>,
//     document.body,
//   );
