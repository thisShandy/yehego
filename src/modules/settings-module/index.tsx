import type { RouteObject } from "react-router-dom";

import ProfilePage from "~/modules/settings-module/ui/pages/profile-page";
import ProfileEditPage from "~/modules/settings-module/ui/pages/profile-edit-page";
import UserEditPage from "~/modules/settings-module/ui/pages/user-edit-page";
import CompanyPage from "~/modules/settings-module/ui/pages/company-page";
import CompanyUsersPage from "~/modules/settings-module/ui/pages/company-users-page";
import CompanyCardPage from "~/modules/settings-module/ui/pages/company-card-page";
import CompanyEditPage from "~/modules/settings-module/ui/pages/company-edit-page";

const settingsModule: RouteObject[] = [
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/profile/edit",
    element: <ProfileEditPage />
  },
  {
    path: "/admin/users/:userId/edit",
    element: <UserEditPage />
  },
  {
    path: "/admin",
    element: <CompanyPage />
  },
  {
    path: "/admin/users",
    element: <CompanyUsersPage />
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
