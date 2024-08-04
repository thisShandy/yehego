import Axios from "~/core/axios";
import { CREATE_DEPARTMENT__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const createDepartment = (name: string) => {
  return Axios.post(CREATE_DEPARTMENT__PATH, { name });
};
