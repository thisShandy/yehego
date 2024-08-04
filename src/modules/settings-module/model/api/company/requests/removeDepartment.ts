import Axios from "~/core/axios";
import { REMOVE_DEPARTMENT__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const removeDepartment = (departmentId: string) => {
  return Axios.delete(REMOVE_DEPARTMENT__PATH(departmentId));
};
