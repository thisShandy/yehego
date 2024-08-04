import type { ISeatCharacteristic } from "~/modules/trip-module/lib/types/seat-characteristic.type.ts";

export interface ITrainSegment {
  has_seatmap: boolean;
  seat: null | number;
  seat_orientations: any[];
  seat_reservation: boolean;
  segmentUuid: string;
  segments_options: any[];
  seat_characteristic: ISeatCharacteristic[];
}
