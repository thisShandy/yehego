import Axios from "~/core/axios";
import { ADD_LOYALTY__PATH } from "~/modules/settings-module/model/api/user/path.ts";

export const addLoyalty = (userId: string, payload: { loyalty_uuid: string; number: string }) => {
  return Axios.post(ADD_LOYALTY__PATH(userId), payload);
};
