import type { RouteObject } from "react-router-dom";

import LoginPage from "~/modules/login-module/ui/pages/login-page";

const loginModule: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default loginModule;
