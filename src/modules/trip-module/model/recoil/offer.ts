import type { IOffer } from "~/modules/trip-module/lib/types/offer.type.ts";

import { atom } from "recoil";

export const offerState = atom<IOffer | null>({
  key: "offerState",
  default: null
});
