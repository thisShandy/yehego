import { getUsers } from "~/modules/settings-module/model/api/company/requests/getUsers.ts";
import { createOffice } from "~/modules/settings-module/model/api/company/requests/createOffice.ts";
import { createDepartment } from "~/modules/settings-module/model/api/company/requests/createDepartment.ts";
import { createProvider } from "~/modules/settings-module/model/api/company/requests/createProvider.ts";
import { getProvider } from "~/modules/settings-module/model/api/company/requests/getProvider.ts";
import { removeDepartment } from "~/modules/settings-module/model/api/company/requests/removeDepartment.ts";
import { removeOffice } from "~/modules/settings-module/model/api/company/requests/removeOffice.ts";
import { removeProvider } from "~/modules/settings-module/model/api/company/requests/removeProvider.ts";
import { inviteUser } from "~/modules/settings-module/model/api/company/requests/inviteUser.ts";
import { inviteExcel } from "~/modules/settings-module/model/api/company/requests/inviteExcel.ts";
import { inviteManual } from "~/modules/settings-module/model/api/company/requests/inviteManual.ts";

export const company = {
  getUsers,
  createOffice,
  removeOffice,
  createDepartment,
  removeDepartment,
  createProvider,
  getProvider,
  removeProvider,
  inviteUser,
  inviteExcel,
  inviteManual
};
