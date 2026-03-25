import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar, MobileNav } from "@/components";
import { LocationSearchDrawer } from "@/features";
import {
  type LocalStorageManager,
  type SessionStorageManager,
} from "@/services";
import { RootLayoutProvider } from "@/routing";

export interface RootRouterContext {
  queryClient: QueryClient;
  storage: {
    local: LocalStorageManager;
    session: SessionStorageManager;
  };
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootLayoutProvider>
      <Navbar />
      <LocationSearchDrawer />
      <Outlet />
      <MobileNav />
    </RootLayoutProvider>
  );
}
