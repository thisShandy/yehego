import type { ITripSegment } from "~/modules/trip-module/lib/types/trip-segment.type.ts";

export interface ITripPart {
  uuid: string;
  arrival_code: string;
  arrival_datetime: string;
  arrival_name: string;
  carbon_emission_unit: string;
  carbon_emission_weight: number;
  class: string;
  co2_level: string;
  departure_code: string;
  departure_datetime: string;
  departure_name: string;
  duration: string;
  estimated_total_travel_time: string;
  saved_carbon_emission_weight: number;
  segments: ITripSegment[];
  transport_type: string;
}
