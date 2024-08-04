import Axios from "~/core/axios";
import { INVITE_USER__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const inviteUser = (companyId: string, email: string) => {
  return Axios.post(INVITE_USER__PATH(companyId), { email });
};
