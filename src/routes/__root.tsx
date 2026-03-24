import React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar, MobileNav } from "@/components";
import { local, session } from "@/services";

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
    <React.Fragment>
      <Navbar />
      <Outlet />
      <MobileNav />
    </React.Fragment>
  );
}
