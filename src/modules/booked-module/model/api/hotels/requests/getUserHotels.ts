import Axios from "~/core/axios";
import { USER_HOTELS__PATH } from "~/modules/booked-module/model/api/hotels/path.ts";

export const getUserHotels = (type: number) => {
  return Axios.get(USER_HOTELS__PATH(type));
};
