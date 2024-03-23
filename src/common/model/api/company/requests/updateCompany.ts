import Axios from "~/core/axios";
import { UPDATE_COMPANY__PATH } from "~/common/model/api/company/path.ts";

export const updateCompany = (companyId: string, data: any) => {
  return Axios.put(`${UPDATE_COMPANY__PATH}/${companyId}`, data);
};
