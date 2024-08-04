import type { RouteObject } from "react-router-dom";

import ProfilePage from "~/modules/settings-module/ui/pages/profile-page";
import ProfileEditPage from "~/modules/settings-module/ui/pages/profile-edit-page";
import AddLoyaltyPage from "~/modules/settings-module/ui/pages/add-loyalty-page";
import UserEditPage from "~/modules/settings-module/ui/pages/user-edit-page";
import CompanyPage from "~/modules/settings-module/ui/pages/company-page";
import CompanyUsersPage from "~/modules/settings-module/ui/pages/company-users-page";
import CompanyCardPage from "~/modules/settings-module/ui/pages/company-card-page";
import CompanyEditPage from "~/modules/settings-module/ui/pages/company-edit-page";
import AddOfficePage from "~/modules/settings-module/ui/pages/add-office-page";
import AddDepartmentPage from "~/modules/settings-module/ui/pages/add-department-page";
import AddProviderPage from "~/modules/settings-module/ui/pages/add-provider-page";
import EmailInvitePage from "~/modules/settings-module/ui/pages/email-invite-page";
import ExcelInvitePage from "~/modules/settings-module/ui/pages/excel-invite-page";
import ManualInvitePage from "~/modules/settings-module/ui/pages/manual-invite-page";

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
    path: "/profile/loyalty/add",
    element: <AddLoyaltyPage />
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
  },
  {
    path: "/admin/office/add",
    element: <AddOfficePage />
  },
  {
    path: "/admin/department/add",
    element: <AddDepartmentPage />
  },
  {
    path: "/admin/provider/add",
    element: <AddProviderPage />
  },
  {
    path: "/admin/invite/email",
    element: <EmailInvitePage />
  },
  {
    path: "/admin/invite/excel",
    element: <ExcelInvitePage />
  },
  {
    path: "/admin/invite/manual",
    element: <ManualInvitePage />
  }
];

export default settingsModule;
