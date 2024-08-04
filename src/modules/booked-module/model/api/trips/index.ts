import { getUpcomingTrips } from "~/modules/booked-module/model/api/trips/requests/getUpcomingTrips.ts";
import { getRefundAmount } from "~/modules/booked-module/model/api/trips/requests/getRefundAmount.ts";
import { cancelTrip } from "~/modules/booked-module/model/api/trips/requests/cancelTrip.ts";

export const trips = {
  getUpcomingTrips,
  getRefundAmount,
  cancelTrip
};
