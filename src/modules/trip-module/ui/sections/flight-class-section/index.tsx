// @ts-nocheck
import type { FC } from "react";
import type { IAirClass } from "~/modules/trip-module/lib/types/air-class.type.ts";

import { useOrder } from "~/modules/trip-module/model/hooks/useOrder.ts";

import FlightClass from "~/modules/trip-module/ui/components/flight-class";

import light from "./styles/light.module.scss";

interface IFlightClassSection {
  classes: IAirClass[];
  partIndex: number;
}

const FlightClassSection: FC<IFlightClassSection> = ({ classes, partIndex }) => {
  const { order, handleAirClassSelect } = useOrder();

  return (
    <div className={light.classContainer}>
      <span className={light.classTitle}>Select class</span>
      <div className={light.classInfo}>
        {classes.map((flightClass) => (
          <FlightClass
            key={flightClass.id}
            flightClass={flightClass}
            selected={order && order[0].parts_info[partIndex].travel_classes === flightClass.id}
            handleSelect={(id) => handleAirClassSelect(id, partIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default FlightClassSection;
