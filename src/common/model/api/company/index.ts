import { getOffices } from "~/common/model/api/company/requests/getOffices.ts";
import { getDepartments } from "~/common/model/api/company/requests/getDepartments.ts";
import { getUserById } from "~/common/model/api/company/requests/getUserById.ts";
import { updateUser } from "~/common/model/api/company/requests/updateUser.ts";
import { updateUserRole } from "~/common/model/api/company/requests/updateUserRole.ts";
import { getUserLoyalty } from "~/common/model/api/company/requests/getUserLoyalty.ts";
import { updateCompany } from "~/common/model/api/company/requests/updateCompany.ts";

export const company = {
  getOffices,
  getDepartments,
  getUserById,
  updateUser,
  updateUserRole,
  getUserLoyalty,
  updateCompany
}
