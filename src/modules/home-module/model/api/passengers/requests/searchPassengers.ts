import Axios from "~/core/axios";
import { SEARCH_PASSENGERS__PATH } from "~/modules/home-module/model/api/passengers/path.ts";

export const searchPassengers = (name: string) => {
  return Axios.get(SEARCH_PASSENGERS__PATH(name));
};
