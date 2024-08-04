export const BOOKING__PATH = "/booking";
export const BOOKING_ID__PATH = (id: string) => `/booking/${id}`;
export const BOOKING_SEATMAP__PATH = (orderUuid: string, partUuid: string, classUuid: string, segmentUuid: string) =>
  `/booking/${orderUuid}/parts/${partUuid}/classUuid/${classUuid}/segments/${segmentUuid}/seatmap`;
