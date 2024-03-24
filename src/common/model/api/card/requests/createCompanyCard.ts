import Axios from "~/core/axios";
import { CREATE_COMPANY_CARD__PATH } from "~/common/model/api/card/path.ts";

export const createCompanyCard = (data: any) => {
  return Axios.post(CREATE_COMPANY_CARD__PATH, data);
};
