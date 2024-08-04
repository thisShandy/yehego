import type { FC } from "react";

import { useState } from "react";

import { getUniqueTransportInfo } from "~/modules/trip-module/ui/pages/results-page";
import { formatTime } from "~/common/lib/helpers/system/format-time.ts";
import { formatDate } from "~/common/lib/helpers/system/format-date.ts";

import ButtonUi from "~/common/ui/kit/button-ui";

import light from "./styles/light.module.scss";
import leaf from "~icons/control/leaf.svg";
import air_start from "~icons/way/air_start.svg";
import train from "~icons/way/train.svg";
import air_end from "~icons/way/air_end.svg";
import { useTripCancel } from "~/modules/booked-module/model/hooks/useTripCancel.ts";

interface ITripItem {
  id: string;
  user: {
    firstname: string;
    lastname: string;
  };
  status: string;
  emission: string;
  price: number;
  currency: string;
  tripParts: any[];
  handleUpdateResults: () => Promise<void>;
}

const TripItem: FC<ITripItem> = ({ id, user, status, emission, price, currency, tripParts, handleUpdateResults }) => {
  const [active, setActive] = useState<boolean>(false);
  const [cancellation, setCancellation] = useState<null | string>(null);

  const { loading, cancelLoading, amount, handleGetAmount, handleCancelTrip } = useTripCancel(id);

  return (
    <div className={light.tripContainer}>
      {status === "STATUS_INTERNAL_COMPLETED" && (
        <div className={light.tripTag}>
          <span className={light.tagTitle}>Finished</span>
        </div>
      )}
      <div className={light.tripInfo}>
        <div className={light.infoData}>
          <span className={light.dataPrice}>{`${Math.round(Number(price))} ${currency}`}</span>
          <div className={light.dataEmission}>
            <img className={light.emissionLeft} src={leaf} alt="leaf" />
            <span className={light.emissionValue}>{emission}kg CO₂</span>
          </div>
          <span className={light.dataName}>{`${user.firstname} ${user.lastname}`}</span>
          {tripParts.find((tripPart) => tripPart.is_cancelable) && (
            <ButtonUi
              size="small"
              label="Cancel this trip"
              style={{ margin: "1rem 1rem 0 1rem" }}
              onClick={() => setActive(true)}
            />
          )}
        </div>
      </div>
      <div className={light.tripDivider} />
      <div className={light.tripContent}>
        <div className={light.contentWay}>
          {tripParts.map((tripPart, index) => (
            <>
              {index !== 0 && <div className={light.wayDivider} />}
              <div className={light.wayContainer}>
                <div className={light.wayHeader}>
                  <span className={light.headerCompany}>{getUniqueTransportInfo(tripPart.segments)}</span>
                  {tripPart.status === "STATUS_EXTERNAL_CANCELLED" && (
                    <div className={light.headerTag}>
                      <span className={light.tagTitle}>Cancelled</span>
                    </div>
                  )}
                </div>
                <div
                  className={`${light.wayInfo} ${tripPart.status === "STATUS_EXTERNAL_CANCELLED" && light.cancelled}`}
                >
                  <div className={light.wayData}>
                    <span className={light.dataTime}>{formatTime(tripPart.departure_date)}</span>
                    <div className={light.dataAddition}>
                      <span className={light.additionCity}>{tripPart.from_city}</span>
                      <span className={light.additionDate}>{formatDate(tripPart.departure_date)}</span>
                    </div>
                  </div>
                  <div className={light.wayContent}>
                    <div className={light.wayInfo}>
                      {tripPart.transport_type === "AIR" && (
                        <img className={light.infoIcon} src={air_start} alt="air_start" />
                      )}
                      {tripPart.transport_type === "TRAIN" && (
                        <img className={light.infoIcon} src={train} alt="train" />
                      )}
                      <span className={light.infoTitle}>
                        {tripPart.transport_type === "AIR" && `Flight time: ${tripPart.duration}`}
                        {tripPart.transport_type === "TRAIN" && `Journey time: ${tripPart.duration}`}
                      </span>
                      {tripPart.transport_type === "AIR" && (
                        <img className={light.infoIcon} src={air_end} alt="air_end" />
                      )}
                      {tripPart.transport_type === "TRAIN" && (
                        <img className={light.infoIcon} src={train} alt="train" />
                      )}
                    </div>
                    <div className={light.wayAirport}>
                      {[
                        ...tripPart.segments.map((segm: any) => segm.from_code),
                        tripPart.segments[tripPart.segments.length - 1].to_code
                      ].map((airport) => (
                        <div key={airport} className={light.airportItem}>
                          <div className={light.itemLine} />
                          <span className={light.itemTitle}>{airport}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={light.wayData}>
                    <span className={light.dataTime}>{formatTime(tripPart.arrival_date)}</span>
                    <div className={light.dataAddition}>
                      <span className={light.additionCity}>{tripPart.to_city}</span>
                      <span className={light.additionDate}>{formatDate(tripPart.arrival_date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {active && (
        <div className={light.cancelModal}>
          <div className={light.modalContainer}>
            <div className={light.modalHeader}>
              <span className={light.headerTitle}>Trip cancellation</span>
              <button type="button" className={light.headerClose} onClick={() => setActive(false)}>
                <span className={light.closeTitle}>+</span>
              </button>
            </div>
            <div className={light.modalDivider} />
            <div className={light.modalBody}>
              {tripParts
                .filter((tripPart) => tripPart.is_cancelable)
                .map((tripPart) => (
                  <div key={`trip_modal_cancel_${tripPart.id}`} className={light.bodyItem}>
                    <span className={light.itemTitle}>{`${tripPart.from_city} - ${tripPart.to_city}`}</span>
                    <button
                      type="button"
                      className={light.itemCancel}
                      onClick={async () => {
                        handleGetAmount(tripPart.uuid);
                        setCancellation(tripPart.uuid);
                        setActive(false);
                      }}
                    >
                      <span className={light.cancelTitle}>Cancel</span>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      {cancellation && (
        <div className={light.cancellationModal}>
          <div className={light.modalContainer}>
            <div className={light.modalBody}>
              <span className={light.bodyTitle}>You are about to cancel this trip, would you like to continue?</span>
              {loading && (
                <span className={light.bodySubtitle}>Getting refund data</span>
              )}
              {!loading && (
                <span className={light.bodySubtitle}>{`After cancellation you will be refunded ${amount.amount} ${amount.currency}`}</span>
              )}
            </div>
            <div className={light.modalFooter}>
              <button type="button" className={light.footerClose} onClick={() => setCancellation(null)}>
                <span className={light.closeTitle}>Close</span>
              </button>
              <button
                type="button"
                disabled={loading || cancelLoading}
                className={light.footerSubmit}
                onClick={async () => {
                  await handleCancelTrip(cancellation);
                  setCancellation(null);
                  await handleUpdateResults();
                }}
              >
                <span className={light.submitTitle}>
                  {cancelLoading && "Loading"}
                  {!cancelLoading && "Confirm"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripItem;
