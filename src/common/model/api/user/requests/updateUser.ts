import Axios from "~/core/axios";
import { UPDATE_PROFILE__PATH } from "~/common/model/api/user/path.ts";

export const updateUser = (data: any) => {
  return Axios.put(UPDATE_PROFILE__PATH, data);
};
