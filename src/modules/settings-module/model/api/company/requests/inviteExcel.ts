import Axios from "~/core/axios";
import { EXCEL_USER__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const inviteExcel = (companyId: string, file: File) => {
  return Axios.postForm(EXCEL_USER__PATH(companyId), { file });
};
