import React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Drawer, Navbar, MobileNav } from "@/components";
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
      <div className="bg-pink-100">
        <Navbar />
        <Drawer />
        {/* <Outlet /> */}
        <MobileNav />
      </div>
    </React.Fragment>
  );
}
