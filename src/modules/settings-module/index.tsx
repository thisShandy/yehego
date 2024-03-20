import type { RouteObject } from "react-router-dom";

import ProfileEditPage from "~/modules/settings-module/ui/pages/profile-edit-page";
import UserEditPage from "~/modules/settings-module/ui/pages/user-edit-page";

const settingsModule: RouteObject[] = [
  {
    path: "/profile/edit",
    element: <ProfileEditPage />
  },
  {
    path: "/admin/users/edit/:userId",
    element: <UserEditPage />
  }
];

export default settingsModule;
