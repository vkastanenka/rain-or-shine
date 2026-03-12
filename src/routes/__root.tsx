import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Navbar } from "@/components";
import type { ReverseGeocodingResponse } from "@/services/big-data-cloud/types";

interface MyRouterContext {
  location?: ReverseGeocodingResponse;
  isLoading: boolean;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
