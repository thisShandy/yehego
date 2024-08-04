import type { ITravelerPart } from "~/modules/trip-module/lib/types/traveler-part.type.ts";

export interface ITraveler {
  loyalty_uuid: string | null;
  price: number;
  price_users_currency: string;
  price_users_total: number;
  traveler_uuid: string;
  parts_info: ITravelerPart[];
}
