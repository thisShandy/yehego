// @ts-nocheck
import { useRecoilState, useRecoilValue } from "recoil";

import { offerState } from "~/modules/trip-module/model/recoil/offer.ts";
import { orderState } from "~/modules/trip-module/model/recoil/order.ts";

export const useOrder = () => {
  const offer = useRecoilValue(offerState);
  const [order, setOrder] = useRecoilState(orderState);

  const handleTrainClassSelect = (code: string, partIndex: number) => {
    setOrder((prev) => {
      return prev.map((traveler) => ({
        ...traveler,
        parts_info: traveler.parts_info.map((part, index) => {
          if (index === partIndex) {
            return {
              ...part,
              travel_classes: code,
              segments_info: part.segments_info.map((segment, segmentIndex) => ({
                segmentUuid: segment.segmentUuid,
                seat_characteristic:
                  offer?.travelers[0].parts_info[index].segments_info[segmentIndex].seat_characteristic.find(
                    (characteristic) => characteristic.for_class === code
                  )?.selected || null,
                seat_orientation: null,
                seat_reservation: true,
                seatmap_reservation: null,
                segments_options: []
              }))
            };
          }

          return part;
        })
      }));
    });
  };

  const handleAirClassSelect = (code: string, partIndex: number) => {
    setOrder((prev) =>
      prev.map((traveler) => ({
        ...traveler,
        parts_info: traveler.parts_info.map((part, index) => {
          if (index === partIndex) {
            return {
              ...part,
              travel_classes: code,
              chargeable_checked_bags: offer?.travelers[0].parts_info[partIndex].travel_classes.classes.find(
                (flightClass) => flightClass.id === code
              ).chargeable_checked_bags.selected,
              segments_info: part.segments_info.map((segment) => ({
                segmentUuid: segment.segmentUuid,
                seat_number: null
              }))
            };
          }

          return part;
        })
      }))
    );
  };

  const handleBaggageSelect = (uuid: string, partIndex: string, userIndex: number) => {
    setOrder((prev) =>
      prev.map((traveler, travelerIndex) => {
        if (travelerIndex === userIndex) {
          return {
            ...traveler,
            parts_info: traveler.parts_info.map((part, index) => {
              if (index === partIndex) {
                return {
                  ...part,
                  chargeable_checked_bags: uuid
                };
              }

              return part;
            })
          };
        }

        return traveler;
      })
    );
  };

  const handleAirSeatSelect = (seat_number: string, partIndex: number, segmentUuid: number, userIndex: number) => {
    setOrder((prev) =>
      prev.map((traveler, travelerIndex) => {
        if (travelerIndex === userIndex) {
          return {
            ...traveler,
            parts_info: traveler.parts_info.map((part, index) => {
              if (index === partIndex) {
                return {
                  ...part,
                  segments_info: part.segments_info.map((segment) => {
                    if (segment.segmentUuid === segmentUuid) {
                      return {
                        ...segment,
                        seat_number
                      };
                    }

                    return segment;
                  })
                };
              }

              return part;
            })
          };
        }

        return traveler;
      })
    );
  };

  return {
    order,
    handleTrainClassSelect,
    handleAirClassSelect,
    handleBaggageSelect,
    handleAirSeatSelect
  };
};
