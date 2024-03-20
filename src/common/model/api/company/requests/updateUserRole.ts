import Axios from "~/core/axios";
import { UPDATE_USER__PATH, UPDATE_USER_ROLE__PATH } from "~/common/model/api/company/path.ts";

export const updateUserRole = (userId: string, data: any) => {
  return Axios.put(`${UPDATE_USER__PATH}/${userId}${UPDATE_USER_ROLE__PATH}`, data);
};
