import type { RouteObject } from "react-router-dom";

import LoginPage from "~/modules/auth-module/ui/pages/login-page";

const authModule: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />
  }
];

export default authModule;
