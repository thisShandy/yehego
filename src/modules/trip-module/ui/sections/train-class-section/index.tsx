import type { FC } from "react";
import type { ITrainClass } from "~/modules/trip-module/lib/types/train-class.type.ts";

import { useRecoilValue } from "recoil";

import { useOrder } from "~/modules/trip-module/model/hooks/useOrder.ts";

import { offerState } from "~/modules/trip-module/model/recoil/offer.ts";

import light from "./styles/light.module.scss";

interface ITrainClassSection {
  classes: ITrainClass[];
  partIndex: number;
}

const TrainClassSection: FC<ITrainClassSection> = ({ classes, partIndex }) => {
  const offer = useRecoilValue(offerState);
  const segments = offer!.trip_offer.parts[partIndex].segments;

  const { order, handleTrainClassSelect } = useOrder();

  const handleSelect = (code: string) => {
    handleTrainClassSelect(code, partIndex);
  };

  return (
    <div className={light.classContainer}>
      <span className={light.classTitle}>Select class</span>
      <div className={light.classInfo}>
        {/*Non-rebookable*/}
        {classes.find((trainClass) => trainClass.uuid === "2_FIX") ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "2_FIX" && light.active}`}
            onClick={() => handleSelect("2_FIX")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>2nd class</span>
              <span className={light.bodyType}>Non-rebookable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "2_FIX")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "2_FIX")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>Sold out</span>
          </button>
        )}
        {classes.find((trainClass) => trainClass.uuid === "2_FIX_X") ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "2_FIX_X" && light.active}`}
            onClick={() => handleSelect("2_FIX_X")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>2nd Class Lung</span>
              <span className={light.bodyType}>Non-rebookable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "2_FIX_X")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "2_FIX_X")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>Sold out</span>
          </button>
        )}
        {classes.find((trainClass) => trainClass.uuid === "1_FIX") ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "1_FIX" && light.active}`}
            onClick={() => handleSelect("1_FIX")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>1st Class</span>
              <span className={light.bodyType}>Non-rebookable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "1_FIX")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "1_FIX")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>Sold out</span>
          </button>
        )}

        {/*Rebookable*/}
        {classes.find((trainClass) => trainClass.uuid === "2_FLEX") && segments[0].carrier_name !== "SJ" ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "2_FLEX" && light.active}`}
            onClick={() => handleSelect("2_FLEX")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>2nd Class</span>
              <span className={light.bodyType}>Rebookable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "2_FLEX")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "2_FLEX")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>{segments[0].carrier_name !== "SJ" ? "Sold out" : "Unavailable"}</span>
          </button>
        )}
        {classes.find((trainClass) => trainClass.uuid === "2_FLEX_X") && segments[0].carrier_name !== "SJ" ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "2_FLEX_X" && light.active}`}
            onClick={() => handleSelect("2_FLEX_X")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>2nd Class Lung</span>
              <span className={light.bodyType}>Rebookable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "2_FLEX_X")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "2_FLEX_X")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>{segments[0].carrier_name !== "SJ" ? "Sold out" : "Unavailable"}</span>
          </button>
        )}
        {classes.find((trainClass) => trainClass.uuid === "1_FLEX") && segments[0].carrier_name !== "SJ" ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "1_FLEX" && light.active}`}
            onClick={() => handleSelect("1_FLEX")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>1st Class</span>
              <span className={light.bodyType}>Rebookable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "1_FLEX")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "1_FLEX")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>{segments[0].carrier_name !== "SJ" ? "Sold out" : "Unavailable"}</span>
          </button>
        )}

        {/*Refundable*/}
        {classes.find((trainClass) => trainClass.uuid === "2_FULL") ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "2_FULL" && light.active}`}
            onClick={() => handleSelect("2_FULL")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>2nd Class</span>
              <span className={light.bodyType}>Refundable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "2_FULL")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "2_FULL")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>Sold out</span>
          </button>
        )}
        {classes.find((trainClass) => trainClass.uuid === "2_FULL_X") ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "2_FULL_X" && light.active}`}
            onClick={() => handleSelect("2_FULL_X")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>2nd Class Lung</span>
              <span className={light.bodyType}>Refundable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "2_FULL_X")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "2_FULL_X")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>Sold out</span>
          </button>
        )}
        {classes.find((trainClass) => trainClass.uuid === "1_FULL") ? (
          <button
            type="button"
            className={`${light.infoOffer} ${order && order[0]?.parts_info[partIndex].travel_classes === "1_FULL" && light.active}`}
            onClick={() => handleSelect("1_FULL")}
          >
            <div className={light.offerBody}>
              <span className={light.bodyClass}>1st Class</span>
              <span className={light.bodyType}>Refundable</span>
            </div>
            <span className={light.offerTitle}>
              {`${Math.round(classes.find((trainClass) => trainClass.uuid === "1_FULL")!.price_users_total)} ${classes.find((trainClass) => trainClass.uuid === "1_FULL")!.price_users_currency}`}
            </span>
          </button>
        ) : (
          <button type="button" className={`${light.infoOffer} ${light.unavailable}`}>
            <span className={light.offerTitle}>Sold out</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TrainClassSection;
