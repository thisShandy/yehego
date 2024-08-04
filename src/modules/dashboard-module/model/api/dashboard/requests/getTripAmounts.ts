import Axios from "~/core/axios";
import { TRIP_AMOUNTS__PATH } from "~/modules/dashboard-module/model/api/dashboard/path.ts";

export const getTripAmounts = (user: string, type: string, sort: string) => {
  return Axios.get(TRIP_AMOUNTS__PATH(user, type, sort));
};
