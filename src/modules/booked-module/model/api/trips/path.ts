export const GET_TRIPS__PATH = (page: number, user: string | null, tripFilter: null | string) =>
  `/v1/trips?page[number]=${page}${user ? `&filter[user]=${user}` : ""}${tripFilter ? `&filter[status]=${tripFilter}` : ""}`;
export const GET_REFUND__PATH = (trip: string, part: string) => `/trips/${trip}/parts/${part}/refund/amount`;
export const CANCEL_TRIP__PATH = (trip: string, part: string) => `/trips/${trip}/parts/${part}/cancel`;
