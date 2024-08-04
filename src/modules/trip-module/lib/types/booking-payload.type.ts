export interface IBookingPayload {
  outward?: string;
  inward?: string;
  round?: string;
  passengers: string[];
  search: string;
}
