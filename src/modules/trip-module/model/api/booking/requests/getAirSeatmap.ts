import Axios from "~/core/axios";
import { BOOKING_SEATMAP__PATH } from "~/modules/trip-module/model/api/booking/path.ts";

export const getAirSeatmap = (orderUuid: string, partUuid: string, classUuid: string, segmentUuid: string) => {
  return Axios.get(BOOKING_SEATMAP__PATH(orderUuid, partUuid, classUuid, segmentUuid));
};
