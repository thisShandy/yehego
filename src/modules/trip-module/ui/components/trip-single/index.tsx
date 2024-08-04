import type { FC } from "react";

import light from "./styles/light.module.scss";
import air_start from "~icons/way/air_start.svg";
import air_end from "~icons/way/air_end.svg";
import train from "~icons/way/train.svg";

interface ITripSingle {
  data: any;
  way: string;
  type: "train" | "air";
  greenest: boolean;
  cheapest: boolean;
  sold: boolean;
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
  setSelected: (type: string, data: any) => void;
  handleMove: (id: string) => void;
}

const TripSingle: FC<ITripSingle> = ({
  data,
  way,
  type,
  greenest,
  cheapest,
  sold,
  cost,
  currency,
  emission,
  time,
  airports,
  start,
  end,
  airline,
  setSelected,
  handleMove
}) => {
  return (
    <div className={`${light.tripContainer} ${greenest && light.greenest}`}>
      {greenest && (
        <div className={light.tripGreenest}>
          <span className={light.greenestTitle}>Greenest selection</span>
        </div>
      )}
      <div className={light.tripControl}>
        {sold && <span className={`${light.controlCost} ${light.sold}`}>Sold out</span>}
        {!sold && (
          <span className={light.controlCost}>
            {cost} {currency}
          </span>
        )}
        <div className={light.controlData}>
          <div className={light.dataEmission}>
            <span className={`${light.emissionTitle} ${sold && light.sold}`}>
              {type === "air" ? emission.toFixed(0) : emission.toFixed(1)}kg CO₂
            </span>
          </div>
          {!sold && (
            <button
              type="button"
              className={light.dataSelect}
              onClick={() => {
                if (way === "outward") {
                  handleMove("inward");
                } else {
                  handleMove("home");
                }
                setSelected(way, data);
              }}
            >
              <span className={light.selectTitle}>Select trip</span>
            </button>
          )}
        </div>
      </div>
      <div className={light.tripBorder} />
      <div className={light.tripInfo}>
        <span className={light.infoTitle}>{airline}</span>
        <div className={light.infoWay}>
          <div className={light.wayData}>
            <span className={light.dataTime}>{start.time}</span>
            <div className={light.dataAddition}>
              <span className={light.additionCity}>{start.city}</span>
              <span className={light.additionDate}>{start.date}</span>
            </div>
          </div>
          <div className={light.wayContainer}>
            <div className={light.wayInfo}>
              {type === "air" && <img className={light.infoIcon} src={air_start} alt="air_start" />}
              {type === "train" && <img className={light.infoIcon} src={train} alt="train" />}
              <span className={light.infoTitle}>
                {type === "air" && `Flight time: ${time}`}
                {type === "train" && `Journey time: ${time}`}
              </span>
              {type === "air" && <img className={light.infoIcon} src={air_end} alt="air_end" />}
              {type === "train" && <img className={light.infoIcon} src={train} alt="train" />}
            </div>
            <div className={light.wayAirport}>
              {airports.map((airport) => (
                <div key={airport} className={light.airportItem}>
                  <div className={light.itemLine} />
                  <span className={light.itemTitle}>{airport}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={light.wayData}>
            <span className={light.dataTime}>{end.time}</span>
            <div className={light.dataAddition}>
              <span className={light.additionCity}>{end.city}</span>
              <span className={light.additionDate}>{end.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSingle;
