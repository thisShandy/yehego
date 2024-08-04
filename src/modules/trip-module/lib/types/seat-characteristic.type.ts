import type { ISeatOption } from "~/modules/trip-module/lib/types/seat-option.type.ts";

export interface ISeatCharacteristic {
  for_class: string;
  name: string;
  selected: string;
  uuid: string;
  options: ISeatOption[];
}
