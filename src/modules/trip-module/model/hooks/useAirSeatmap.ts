import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { tripApi } from "~/modules/trip-module/model/api";

import { offerState } from "~/modules/trip-module/model/recoil/offer.ts";

export const useAirSeatmap = (partUuid: string, classUuid: string, segmentUuid: string) => {
  const [seatmap, setSeatmap] = useState<null | any>(null);
  const offer = useRecoilValue(offerState);

  useEffect(() => {
    (async () => {
      const { data } = await tripApi.booking.getAirSeatmap(offer!.uuid, partUuid, classUuid, segmentUuid);

      if (data[0]) {
        setSeatmap(data[0]);
      }
    })();
  }, []);

  return {
    seatmap
  };
};
