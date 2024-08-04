import type { RouteObject } from "react-router-dom";

import DashboardPage from "~/modules/dashboard-module/ui/pages/dashboard-page";

const dashboardModule: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
];

export default dashboardModule;
