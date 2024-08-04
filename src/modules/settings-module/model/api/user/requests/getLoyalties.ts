import Axios from "~/core/axios";
import { GET_LOYALTIES__PATH } from "~/modules/settings-module/model/api/user/path.ts";

export const getLoyalties = () => {
  return Axios.get(GET_LOYALTIES__PATH);
};
