export interface ISegmentClass {
  amenities: any;
  branded_fare: string;
  class: string;
  has_seatmap: boolean;
  included_checked_bag: {
    value: number;
    valueUnitType: string;
    weightUnitType: any;
  };
  segmentUuid: string;
}
