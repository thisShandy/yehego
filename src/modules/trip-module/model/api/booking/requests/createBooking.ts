import type { IBookingPayload } from "~/modules/trip-module/lib/types/booking-payload.type.ts";
import type { IOffer } from "~/modules/trip-module/lib/types/offer.type.ts";

import Axios from "~/core/axios";
import { BOOKING__PATH } from "~/modules/trip-module/model/api/booking/path.ts";

export const createBooking = (payload: IBookingPayload) => {
  return Axios.post<IOffer>(BOOKING__PATH, payload);
};
