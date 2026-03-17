import React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components";
import { local, session } from "@/services";

interface RootRouterContext {
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
    </React.Fragment>
  );
}
