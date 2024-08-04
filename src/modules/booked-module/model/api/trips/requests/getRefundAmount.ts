import Axios from "~/core/axios";
import { GET_REFUND__PATH } from "~/modules/booked-module/model/api/trips/path.ts";

export const getRefundAmount = (trip: string, part: string) => {
  return Axios.get(GET_REFUND__PATH(trip, part));
};
