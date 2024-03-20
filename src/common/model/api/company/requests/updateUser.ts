import Axios from "~/core/axios";
import { UPDATE_USER__PATH } from "~/common/model/api/company/path.ts";

export const updateUser = (userId: string, data: any) => {
  return Axios.put(`${UPDATE_USER__PATH}/${userId}`, data);
};
