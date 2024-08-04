import type { FC } from "react";
import type { IAirClass } from "~/modules/trip-module/lib/types/air-class.type.ts";

import light from "./styles/light.module.scss";

interface IFlightClass {
  flightClass: IAirClass;
  selected: null | boolean;
  handleSelect: (id: string) => void;
}

const FlightClass: FC<IFlightClass> = ({ flightClass, selected, handleSelect }) => {
  return (
    <div className={light.flightContainer}>
      {!flightClass.is_segments_have_the_same_classes &&
        flightClass.segmentClasses.map((flightSegment) => (
          <div key={flightSegment.class} className={light.flightBlock}>
            <div className={light.blockHeader}>
              <span className={light.headerTitle}>{flightSegment.branded_fare}</span>
              <span className={light.headerWay}>London - Stockholm</span>
            </div>
            <div className={light.blockBody}>
              {flightSegment.amenities.map((amenity: { description: string }) => (
                <span key={amenity.description} className={light.bodyTitle}>
                  • {amenity.description}
                </span>
              ))}
            </div>
          </div>
        ))}
      {flightClass.is_segments_have_the_same_classes && (
        <div className={light.flightBlock}>
          <div className={light.blockHeader}>
            <span className={light.headerTitle}>{flightClass.segmentClasses[0].branded_fare}</span>
            <span className={light.headerWay}>London - Stockholm</span>
          </div>
          <div className={light.blockBody}>
            {flightClass.segmentClasses[0].amenities.map((amenity: { description: string }) => (
              <span key={amenity.description} className={light.bodyTitle}>
                • {amenity.description}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className={light.flightFooter}>
        <span className={light.footerPrice}>{`${flightClass.price.amount} ${flightClass.price.currency}`}</span>
        <button
          type="button"
          className={`${light.footerSelect} ${selected && light.selected}`}
          onClick={() => handleSelect(flightClass.id)}
        >
          <span className={light.selectTitle}>{selected ? "Selected" : "Select"}</span>
        </button>
      </div>
    </div>
  );
};

export default FlightClass;
