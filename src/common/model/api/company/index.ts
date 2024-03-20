import { getOffices } from "~/common/model/api/company/requests/getOffices.ts";
import { getDepartments } from "~/common/model/api/company/requests/getDepartments.ts";
import { getUserById } from "~/common/model/api/company/requests/getUserById.ts";

export const company = {
  getOffices,
  getDepartments,
  getUserById
}
