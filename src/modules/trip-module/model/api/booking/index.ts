import { createBooking } from "~/modules/trip-module/model/api/booking/requests/createBooking.ts";
import { getBooking } from "~/modules/trip-module/model/api/booking/requests/getBooking.ts";
import { getAirSeatmap } from "~/modules/trip-module/model/api/booking/requests/getAirSeatmap.ts";

export const booking = {
  createBooking,
  getBooking,
  getAirSeatmap
};
