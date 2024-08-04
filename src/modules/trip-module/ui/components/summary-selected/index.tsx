import type { FC } from "react";

import { formatTime } from "~/common/lib/helpers/system/format-time.ts";

import ButtonUi from "~/common/ui/kit/button-ui";

import light from "./styles/light.module.scss";

interface ISummarySelected {
  title: string;
  moveTo: () => void;
  selected: any | null;
  setSelected: (type: string, data: any) => void;
}

const SummarySelected: FC<ISummarySelected> = ({ title, moveTo, selected, setSelected }) => {
  return (
    <div className={light.summarySelected}>
      <div className={light.selectedHeader}>
        <span className={light.headerWay}>{title}</span>
        {selected && (
          <button type="button" className={light.headerClose} onClick={() => setSelected(title.toLowerCase(), null)}>
            <span className={light.closeTitle}>+</span>
          </button>
        )}
      </div>
      {!selected && (
        <ButtonUi size="small" onClick={moveTo}>
          {`Show ${title.toLowerCase()} trips`}
        </ButtonUi>
      )}
      {selected && (
        <>
          <span className={light.selectedDirection}>{`${selected.from_city} - ${selected.to_city}`}</span>
          <span className={light.selectedEmission}>
            {`${(selected.parts[0].carbon_emission_weight / 1000).toFixed()}kg CO₂`}
          </span>
          <div className={light.selectedDate}>
            <span className={light.dateData}>Mon April 13</span>
            <span className={light.dateTime}>
              {`${formatTime(selected.parts[0].departure_datetime)} - ${formatTime(selected.parts[0].arrival_datetime)}`}
            </span>
          </div>
          <div className={light.selectedFlight}>
            <span className={light.flightTitle}>Flight time</span>
            <span className={light.flightTime}>
              {`${selected.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "")[0]}h ${selected.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "").split("H")[1]}${selected.parts[0].estimated_total_travel_time.replace("PT", "").replace("M", "").split("H")[1] ? "m" : ""}`}
            </span>
          </div>
          <div className={light.selectedPrice}>
            <span className={light.priceTitle}>Price:</span>
            <span className={light.priceAmount}>
              {`${selected.price_origin_total} ${selected.price_origin_currency}`}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SummarySelected;
