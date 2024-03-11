import type { RouteObject } from "react-router-dom";

import HomePage from "~/modules/home-module/ui/pages/home-page";

const homeModule: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />
  }
];

export default homeModule;
