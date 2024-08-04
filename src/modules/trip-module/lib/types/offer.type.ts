import type { ITraveler } from "~/modules/trip-module/lib/types/traveler.type.ts";
import type { ITripOffer } from "~/modules/trip-module/lib/types/trip-offer.type.ts";

export interface IOffer {
  uuid: string;
  travelers: ITraveler[];
  trip_offer: ITripOffer;
}
