import type { IAirSegment } from "~/modules/trip-module/lib/types/air-segment.type.ts";
import type { ITrainSegment } from "~/modules/trip-module/lib/types/train-segment.type.ts";
import type { IAirClass } from "~/modules/trip-module/lib/types/air-class.type.ts";
import type { ITrainClass } from "~/modules/trip-module/lib/types/train-class.type.ts";

export interface ITravelerPart {
  part_uuid: string;
  price: number;
  price_origin_currency: string;
  price_origin_total: number;
  price_users_currency: string;
  price_users_total: number;
  segments_info: IAirSegment[] | ITrainSegment[];
  travel_classes: {
    classes: IAirClass[] | ITrainClass[];
    selected: string;
  };
}
