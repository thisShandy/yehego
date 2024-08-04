import type { ITripPart } from "~/modules/trip-module/lib/types/trip-part.type.ts";

export interface ITripOffer {
  uuid: string;
  from_city: string;
  from_city_code: string;
  inward_datetime: string;
  is_low_cost: boolean;
  outward_datetime: string;
  parts: ITripPart[];
  price_currency: string;
  price_origin_currency: string;
  price_origin_total: number;
  price_total: number;
  price_users_currency: string;
  price_users_total: number;
  range_type: string;
  sold_out: boolean;
  to_city: string;
  to_city_code: string;
  transport_type: string;
  trip_type: string;
}
