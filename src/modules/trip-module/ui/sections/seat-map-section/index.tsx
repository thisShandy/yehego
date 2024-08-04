// @ts-nocheck
import type { FC } from "react";
import type { IUser } from "~/common/lib/types/user/user.type.ts";
import type { IAirClass } from "~/modules/trip-module/lib/types/air-class.type.ts";

import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import { useOrder } from "~/modules/trip-module/model/hooks/useOrder.ts";
import { useAirSeatmap } from "~/modules/trip-module/model/hooks/useAirSeatmap.ts";

import { orderState } from "~/modules/trip-module/model/recoil/order.ts";

import light from "./styles/light.module.scss";

interface ISeatMapSection {
  users: IUser[];
  partUuid: string;
  partIndex: number;
  segment: any;
  segmentIndex: number;
  airClass: IAirClass;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

const Row = ({ id, amount, facilities, seats, selectFlightSeat, selectedSeats }) => {
  const N = amount;
  const columns = Array.apply(null, { length: N }).map(Number.call, Number);

  return (
    <div className={light.seatRow} style={{ display: "flex", flexWrap: "nowrap" }}>
      {columns.map((column, index) => {
        const facility = facilities.find((el) => el.coordinates.x === index);
        const seat = seats.find((el) => el.coordinates.x === index);
        const number = facility ? facility.code : seat ? seat.number : null;
        const isAvailable = seat && seat.travelerPricing[0].seatAvailabilityStatus === "AVAILABLE";
        const isSelected = isAvailable && selectedSeats.find((el) => el === number);
        const handleSelectFlightSeat = () => {
          selectFlightSeat(number);
        };

        return (
          <button
            className={`${light.rowItem} ${isSelected && light.active}`}
            disabled={!isAvailable}
            type="button"
            key={column}
            onClick={handleSelectFlightSeat}
            style={{
              backgroundColor: !number
                ? "transparent"
                : isSelected
                  ? "#FFD464"
                  : isAvailable
                    ? "transparent"
                    : "#CDCDCD"
            }}
          >
            <span className={light.itemTitle}>{number}</span>
          </button>
        );
      })}
    </div>
  );
};

const SeatMapSection: FC<ISeatMapSection> = ({ users, partUuid, partIndex, segment, segmentIndex, airClass }) => {
  const { seatmap } = useAirSeatmap(partUuid, airClass.id, segment.segmentUuid);
  const { handleAirSeatSelect } = useOrder();
  const order = useRecoilValue(orderState);
  const size = useWindowSize();

  const [userIndex, setUserIndex] = useState(0);

  if (!seatmap) return;
  if (!users.length) return;

  const N = seatmap.deckConfiguration.width;
  const rows = Array.apply(null, { length: N }).map(Number.call, Number);
  const exits = seatmap.deckConfiguration.exitRowsX ? seatmap.deckConfiguration.exitRowsX : [];

  const sizeCheck = seatmap.deckConfiguration.length > 30 ? size.width > 1520 : size.width > 1300;

  const handleSelectSeat = (num: string) => {
    handleAirSeatSelect(num, partIndex, segment.segmentUuid, userIndex);

    setUserIndex((prev) => {
      if (prev < users.length - 1) {
        return prev + 1;
      }

      return 0;
    });
  };

  return (
    <div className={light.seatContainer}>
      <span className={light.seatTitle}>Select seat</span>
      <span className={light.seatWay}>Stockholm - Malmo</span>
      <div className={light.seatMap}>
        <div className={light.mapExit}>
          {exits.map((exit, index) => (
            <div
              className={light.exitBlock}
              style={
                sizeCheck
                  ? {
                      marginLeft: `${index === 0 ? 42 * exit + 3 : 42 * (exit - 1 - exits[index - 1]) + 3}px`
                    }
                  : {
                      marginTop: `${index === 0 ? 42 * exit + 3 : 42 * (exit - 1 - exits[index - 1]) + 3}px`
                    }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </div>
          ))}
        </div>
        <div className={light.rowContainer}>
          {rows.map((row, index) => {
            const facilities = seatmap.facilities ? seatmap.facilities.filter((el) => el.coordinates.y === index) : [];
            const seats = seatmap.seats.filter((el) => el.coordinates.y === index);
            return (
              <Row
                key={row}
                id={row}
                amount={seatmap.deckConfiguration.length}
                facilities={facilities}
                seats={seats}
                selectFlightSeat={(num: string) => handleSelectSeat(num)}
                selectedSeats={order.map(
                  (travelerSeats) => travelerSeats.parts_info[partIndex].segments_info[segmentIndex].seat_number
                )}
              />
            );
          })}
        </div>
        <div className={light.mapExit}>
          {exits.map((exit, index) => (
            <div
              className={light.exitBlock}
              style={
                sizeCheck
                  ? {
                      marginLeft: `${index === 0 ? 42 * exit + 3 : 42 * (exit - 1 - exits[index - 1]) + 3}px`
                    }
                  : {
                      marginTop: `${index === 0 ? 42 * exit + 3 : 42 * (exit - 1 - exits[index - 1]) + 3}px`
                    }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div key={`seats_${users}`} className={light.seatContent}>
        {order.map((triper, uI) => {
          const user = users.find((el) => el.uuid === triper.traveler_uuid);

          return (
            <div className={`${light.contentItem} ${uI === userIndex && light.active}`}>
              <span className={light.itemName} onClick={() => setUserIndex(uI)}>
                {`${user?.firstname} ${user?.lastname}:`}
              </span>
              <span className={light.itemSeat}>
                {order
                  ?.find((traveler) => traveler.traveler_uuid === user?.uuid)
                  ?.parts_info[
                    partIndex
                  ].segments_info.find((orderSegment) => orderSegment.segmentUuid === segment.segmentUuid)
                  .seat_number || "-"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeatMapSection;
