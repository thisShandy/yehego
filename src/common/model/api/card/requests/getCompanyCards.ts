import type { ICard } from "~/common/lib/types/system/card.type.ts";

import Axios from "~/core/axios";
import { COMPANY_CARD__PATH } from "~/common/model/api/card/path.ts";

export const getCompanyCards = () => {
  return Axios.get<ICard[]>(COMPANY_CARD__PATH);
};
