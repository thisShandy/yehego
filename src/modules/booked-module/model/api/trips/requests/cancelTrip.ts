import Axios from "~/core/axios";
import { CANCEL_TRIP__PATH } from "~/modules/booked-module/model/api/trips/path.ts";

export const cancelTrip = (trip: string, part: string) => {
  return Axios.post(CANCEL_TRIP__PATH(trip, part), {});
};
