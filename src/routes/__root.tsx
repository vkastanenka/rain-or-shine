import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components";
import { useGetLocationByCoords, getLocationByCoordsOptions } from "@/services";

interface RootRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  loader: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(getLocationByCoordsOptions());
    } catch (error) {
      console.warn("Location fetch failed, proceeding with default state.");
    }
  },
  component: RootComponent,
});

function RootComponent() {
  useGetLocationByCoords();

  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}
