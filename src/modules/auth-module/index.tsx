import type { RouteObject } from "react-router-dom";

import LoginPage from "~/modules/auth-module/ui/pages/login-page";
import InvitePage from "~/modules/auth-module/ui/pages/invite-page";

const authModule: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/invite",
    element: <InvitePage />
  }
];

export default authModule;
