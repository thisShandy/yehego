import Axios from "~/core/axios";
import { GET_TRIPS__PATH } from "~/modules/booked-module/model/api/trips/path.ts";

export const getUpcomingTrips = (page: number, user: string | null, tripFilter: null | string) => {
  return Axios.get(GET_TRIPS__PATH(page, user, tripFilter));
};
