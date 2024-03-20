import type { ILoyaltyCard } from "~/common/lib/types/user/loyalty-card.type.ts";

import Axios from "~/core/axios";
import { GET_USER_LOYALTY__PATH, GET_LOYALTY__PATH } from "~/common/model/api/company/path.ts";

export const getUserLoyalty = (userId: string) => {
  return Axios.get<{ data: ILoyaltyCard[] }>(`${GET_USER_LOYALTY__PATH}/${userId}${GET_LOYALTY__PATH}`);
};
