import Axios from "~/core/axios";
import { CO_CHART__PATH } from "~/modules/dashboard-module/model/api/dashboard/path.ts";

export const getCoChart = (user: string, type: string) => {
  return Axios.get(CO_CHART__PATH(user, type));
};
