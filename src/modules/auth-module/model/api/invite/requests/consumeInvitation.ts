import Axios from "~/core/axios";
import { CONSUME_INVITATION__PATH } from "~/modules/auth-module/model/api/invite/path.ts";

export const consumeInvitation = (payload: any) => {
  return Axios.post(CONSUME_INVITATION__PATH, payload);
};
