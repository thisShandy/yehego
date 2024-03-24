import Axios from "~/core/axios";
import { CREATE_COMPANY_CARD__PATH } from "~/common/model/api/card/path.ts";

export const deleteCompanyCard = (cardId: string) => {
  return Axios.delete(`${CREATE_COMPANY_CARD__PATH}/${cardId}`);
};
