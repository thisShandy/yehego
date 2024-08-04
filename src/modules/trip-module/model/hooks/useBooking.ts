// @ts-nocheck
import type { IUser } from "~/common/lib/types/user/user.type.ts";
import type { IOffer } from "~/modules/trip-module/lib/types/offer.type.ts";
import type { IBookingPayload } from "~/modules/trip-module/lib/types/booking-payload.type.ts";
import type { ITrainSegment } from "~/modules/trip-module/lib/types/train-segment.type.ts";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import api from "~/common/model/api";
import { tripApi } from "~/modules/trip-module/model/api";

import { offerState } from "~/modules/trip-module/model/recoil/offer.ts";
import { orderState } from "~/modules/trip-module/model/recoil/order.ts";

export const useBooking = (uuid?: string) => {
  const parsed: any = queryString.parse(location.search);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useRecoilState(orderState);
  const [offer, setOffer] = useRecoilState(offerState);

  const [users, setUsers] = useState<IUser[]>([]);

  const handlePrepareOrder = (data: IOffer) => {
    setOrder(
      data.travelers.map((traveler) => {
        return {
          document: null,
          loyalty_uuid: traveler.loyalty_uuid,
          traveler_uuid: traveler.traveler_uuid,
          parts_info: traveler.parts_info.map((part, index) => {
            const partType = data.trip_offer.parts[index].transport_type;

            if (partType === "AIR") {
              return {
                document: null,
                loyalty_uuid: null,
                partType: data.trip_offer.parts[index].transport_type,
                part_uuid: part.part_uuid,
                travel_classes: part.travel_classes.selected,
                chargeable_checked_bags: part.travel_classes.classes.find(
                  (flightClass) => flightClass.id === part.travel_classes.selected
                ).chargeable_checked_bags.selected,
                segments_info: part.segments_info.map((segment) => ({
                  segmentUuid: segment.segmentUuid,
                  seat_number: null
                }))
              };
            }

            return {
              document: null,
              loyalty_uuid: null,
              partType: data.trip_offer.parts[index].transport_type,
              part_uuid: part.part_uuid,
              travel_classes: part.travel_classes.selected,
              segments_info: part.segments_info.map((segment: ITrainSegment) => ({
                segmentUuid: segment.segmentUuid,
                seat_characteristic:
                  segment.seat_characteristic.find(
                    (characteristic) => characteristic.for_class === part.travel_classes.selected
                  )?.selected || null,
                seat_orientation: null,
                seat_reservation: true,
                seatmap_reservation: null,
                segments_options: []
              }))
            };
          })
        };
      })
    );

    data.travelers.map(async (traveler) => {
      try {
        const { data } = await api.company.getUserById(traveler.traveler_uuid);
        console.log("user data", data);
        setUsers((prev) => [...prev, data]);
      } catch (e) {
        console.log(e);
      }
    });
  };

  const handleBook = async () => {
    try {
      const payload: IBookingPayload = {
        member_uuids: [parsed["passengers[]"] as string[]].flat(),
        search: parsed.search as string
      };

      if (parsed.outward) payload.outward = parsed.outward;
      if (parsed.inward) payload.inward = parsed.inward;
      if (parsed.round) payload.round = parsed.round;

      const { data } = await tripApi.booking.createBooking(payload);

      handlePrepareOrder(data);
      setOffer(data);
      navigate(`/trips/details/${data.uuid}`);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleGetBook = async () => {
    setLoading(true);
    try {
      const { data } = await tripApi.booking.getBooking(uuid!);

      console.log("loaded", data);
      handlePrepareOrder(data);
      setOffer(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (uuid && !offer) {
        return await handleGetBook();
      }
      if (parsed.search) {
        return await handleBook();
      }
    })();
  }, []);

  return {
    loading,
    order,
    users
  };
};
