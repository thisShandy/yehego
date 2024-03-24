import type { RouteObject } from "react-router-dom";

import ProfileEditPage from "~/modules/settings-module/ui/pages/profile-edit-page";
import UserEditPage from "~/modules/settings-module/ui/pages/user-edit-page";
import CompanyPage from "~/modules/settings-module/ui/pages/company-page";
import CompanyCardPage from "~/modules/settings-module/ui/pages/company-card-page";
import CompanyEditPage from "~/modules/settings-module/ui/pages/company-edit-page";

const settingsModule: RouteObject[] = [
  {
    path: "/profile/edit",
    element: <ProfileEditPage />
  },
  {
    path: "/admin/users/edit/:userId",
    element: <UserEditPage />
  },
  {
    path: "/admin",
    element: <CompanyPage />
  },
  {
    path: "/admin/card",
    element: <CompanyCardPage />
  },
  {
    path: "/admin/edit",
    element: <CompanyEditPage />
  }
];

export default settingsModule;
