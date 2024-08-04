import Axios from "~/core/axios";
import { MANUAL_USER__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const inviteManual = (companyId: string, payload: any) => {
  return Axios.post(MANUAL_USER__PATH(companyId), payload);
};
