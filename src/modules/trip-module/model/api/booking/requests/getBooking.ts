import type { IOffer } from "~/modules/trip-module/lib/types/offer.type.ts";

import Axios from "~/core/axios";
import { BOOKING_ID__PATH } from "~/modules/trip-module/model/api/booking/path.ts";

export const getBooking = (uuid: string) => {
  return Axios.get<IOffer>(BOOKING_ID__PATH(uuid));
};
