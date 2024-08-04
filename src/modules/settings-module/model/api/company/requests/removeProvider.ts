import Axios from "~/core/axios";
import { REMOVE_PROVIDER__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const removeProvider = (companyId: string, contractId: string) => {
  return Axios.delete(REMOVE_PROVIDER__PATH(companyId, contractId));
};
