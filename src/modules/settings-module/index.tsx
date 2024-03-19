import type { RouteObject } from "react-router-dom";

import ProfileEditPage from "~/modules/settings-module/ui/pages/profile-edit-page";

const settingsModule: RouteObject[] = [
  {
    path: "/profile/edit",
    element: <ProfileEditPage />
  }
];

export default settingsModule;
