import Axios from "~/core/axios";
import { PROVIDER__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const getProvider = (companyId: string) => {
  return Axios.get(PROVIDER__PATH(companyId));
};
