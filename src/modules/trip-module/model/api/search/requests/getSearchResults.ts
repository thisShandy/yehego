import Axios from "~/core/axios";
import { SEARCH_TRIPS__PATH } from "~/modules/trip-module/model/api/search/path.ts";

export const getSearchResults = (query: string) => {
  return Axios.get(SEARCH_TRIPS__PATH(query));
};
