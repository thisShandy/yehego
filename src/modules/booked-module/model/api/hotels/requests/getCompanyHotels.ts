import Axios from "~/core/axios";
import { COMPANY_HOTELS__PATH } from "~/modules/booked-module/model/api/hotels/path.ts";

export const getCompanyHotels = (type: number) => {
  return Axios.get(COMPANY_HOTELS__PATH(type));
};
