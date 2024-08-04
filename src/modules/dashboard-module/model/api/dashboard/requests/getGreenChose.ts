import Axios from "~/core/axios";
import { GREEN_CHOSE__PATH } from "~/modules/dashboard-module/model/api/dashboard/path.ts";

export const getGreenChose = (user: string, type: string, sort: string) => {
  return Axios.get(GREEN_CHOSE__PATH(user, type, sort));
};
