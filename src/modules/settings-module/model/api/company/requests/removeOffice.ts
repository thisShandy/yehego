import Axios from "~/core/axios";
import { REMOVE_OFFICE__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const removeOffice = (officeId: string) => {
  return Axios.delete(REMOVE_OFFICE__PATH(officeId));
};
