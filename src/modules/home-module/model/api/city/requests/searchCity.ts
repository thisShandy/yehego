import Axios from "~/core/axios";

import { SEARCH_CITY__PATH } from "~/modules/home-module/model/api/city/path.ts";

export const searchCity = (name: string) => {
  return Axios.get(SEARCH_CITY__PATH(name));
};
