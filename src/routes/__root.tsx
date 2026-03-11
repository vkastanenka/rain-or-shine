import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "@/components";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  );
}
