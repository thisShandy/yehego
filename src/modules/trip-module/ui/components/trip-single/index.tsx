import type { FC } from "react";

import light from "./styles/light.module.scss";
import air_start from "~icons/way/air_start.svg";
import air_end from "~icons/way/air_end.svg";
import train from "~icons/way/train.svg";

interface ITripSingle {
  type: "train" | "air";
  greenest: boolean;
  cheapest: boolean;
  cost: string;
  currency: string;
  emission: string;
  time: string;
  airports: string[];
  start: {
    city: string;
    time: string;
    date: string;
  };
  end: {
    city: string;
    time: string;
    date: string;
  };
  airline: string;
}

const TripSingle: FC<ITripSingle> = ({
  type, greenest, cheapest, cost, currency, emission, time, airports, start, end, airline
}) => {
  return (
    <div className={`${light.tripContainer} ${greenest && light.greenest}`}>
      {greenest && (
        <div className={light.tripGreenest}>
          <span className={light.greenestTitle}>Greenest selection</span>
        </div>
      )}
      <div className={light.tripControl}>
        <span className={light.controlCost}>
          {cost} {currency}
        </span>
        <div className={light.controlData}>
          <div className={light.dataEmission}>
            <span className={light.emissionTitle}>
              {emission}kg CO₂
            </span>
          </div>
          <button type="button" className={light.dataSelect}>
            <span className={light.selectTitle}>Select trip</span>
          </button>
        </div>
      </div>
      <div className={light.tripBorder} />
      <div className={light.tripInfo}>
        <span className={light.infoTitle}>
          {airline}
        </span>
        <div className={light.infoWay}>
          <div className={light.wayData}>
            <span className={light.dataTime}>
              {start.time}
            </span>
            <div className={light.dataAddition}>
              <span className={light.additionCity}>
                {start.city}
              </span>
              <span className={light.additionDate}>
                {start.date}
              </span>
            </div>
          </div>
          <div className={light.wayContainer}>
            <div className={light.wayInfo}>
              {type === "air" && (
                <img className={light.infoIcon} src={air_start} alt="air_start" />
              )}
              {type === "train" && (
                <img className={light.infoIcon} src={train} alt="train" />
              )}
              <span className={light.infoTitle}>
                {type === "air" && `Flight time: ${time} hours`}
                {type === "train" && `Journey time: ${time} hours`}
              </span>
              {type === "air" && (
                <img className={light.infoIcon} src={air_end} alt="air_end" />
              )}
              {type === "train" && (
                <img className={light.infoIcon} src={train} alt="train" />
              )}
            </div>
            <div className={light.wayAirport}>
              {airports.map(airport => (
                <div key={airport} className={light.airportItem}>
                  <div className={light.itemLine}/>
                  <span className={light.itemTitle}>
                  {airport}
                </span>
                </div>
              ))}
            </div>
          </div>
          <div className={light.wayData}>
            <span className={light.dataTime}>
              {end.time}
            </span>
            <div className={light.dataAddition}>
              <span className={light.additionCity}>
                {end.city}
              </span>
              <span className={light.additionDate}>
                {end.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSingle;
