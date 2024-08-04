import type { FC } from "react";

import light from "./styles/light.module.scss";
import air_start from "~icons/way/air_start.svg";
import air_end from "~icons/way/air_end.svg";
import train from "~icons/way/train.svg";

interface ITripRound {
  greenest: boolean;
  cheapest: boolean;
  cost: string;
  currency: string;
  emission: string;
  trips: {
    type: "train" | "air";
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
  }[];
}

const TripRound: FC<ITripRound> = ({ greenest, trips, cost, currency, emission }) => {
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
            <span className={light.emissionTitle}>{emission}kg CO₂</span>
          </div>
          <button type="button" className={light.dataSelect}>
            <span className={light.selectTitle}>Select trip</span>
          </button>
        </div>
      </div>
      <div className={light.tripBorder} />
      <div className={light.tripRound}>
        {trips.map((trip, index) => (
          <div key={index.toString()} className={light.roundContainer}>
            <div className={light.tripInfo}>
              <span className={light.infoTitle}>{trip.airline}</span>
              <div className={light.infoWay}>
                <div className={light.wayData}>
                  <span className={light.dataTime}>{trip.start.time}</span>
                  <div className={light.dataAddition}>
                    <span className={light.additionCity}>{trip.start.city}</span>
                    <span className={light.additionDate}>{trip.start.date}</span>
                  </div>
                </div>
                <div className={light.wayContainer}>
                  <div className={light.wayInfo}>
                    {trip.type === "air" && <img className={light.infoIcon} src={air_start} alt="air_start" />}
                    {trip.type === "train" && <img className={light.infoIcon} src={train} alt="train" />}
                    <span className={light.infoTitle}>
                      {trip.type === "air" && `Flight time: ${trip.time} hours`}
                      {trip.type === "train" && `Journey time: ${trip.time} hours`}
                    </span>
                    {trip.type === "air" && <img className={light.infoIcon} src={air_end} alt="air_end" />}
                    {trip.type === "train" && <img className={light.infoIcon} src={train} alt="train" />}
                  </div>
                  <div className={light.wayAirport}>
                    {trip.airports.map((airport) => (
                      <div key={airport} className={light.airportItem}>
                        <div className={light.itemLine} />
                        <span className={light.itemTitle}>{airport}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={light.wayData}>
                  <span className={light.dataTime}>{trip.end.time}</span>
                  <div className={light.dataAddition}>
                    <span className={light.additionCity}>{trip.end.city}</span>
                    <span className={light.additionDate}>{trip.end.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripRound;
