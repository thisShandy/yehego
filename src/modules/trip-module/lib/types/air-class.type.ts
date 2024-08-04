import type { IAirBag } from "~/modules/trip-module/lib/types/air-bag.type.ts";
import type { ISegmentClass } from "~/modules/trip-module/lib/types/segment-class.type.ts";

export interface IAirClass {
  id: string;
  carbon_emission_weight: number;
  chargeable_checked_bags: {
    options: IAirBag[];
    selected: string;
  };
  included_checked_bag: {
    value: number;
    valueUnitType: string;
    weightUnitType: any;
  };
  is_bookable: boolean;
  is_segments_have_the_same_classes: boolean;
  price: {
    amount: number;
    currency: string;
  };
  segmentClasses: ISegmentClass[];
}
