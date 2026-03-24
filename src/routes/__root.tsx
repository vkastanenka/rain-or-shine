import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Drawer, Navbar, MobileNav } from "@/components";
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
      <Drawer />
      <Outlet />
      <MobileNav />
    </RootLayoutProvider>
  );
}
