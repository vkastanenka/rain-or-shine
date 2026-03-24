import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar, MobileNav } from "@/components";
import { LocationSearchDrawer } from "@/features";
import { local, session } from "@/services";
import { RootLayoutProvider } from "@/routing";

export interface RootRouterContext {
  queryClient: QueryClient;
  storage: {
    local: typeof local;
    session: typeof session;
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
