import type { Range, RangeKeyDict } from "react-date-range";
import type { FC } from "react";

import { useState } from "react";
import { DateRangePicker } from "react-date-range";

import DateSelect from "~/modules/home-module/ui/components/date-select";

import { searchTypes } from "~/common/lib/configs/search/search-types.ts";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styles/picker.css";
import light from "./styles/light.module.scss";

interface IDatePicker  {
  type: string;
  oneway?: boolean;
  outwardDate: string | null;
  returnDate: string | null;
  range: Range,
  dateOpen: boolean;
  handleOneway?: (value?: boolean) => void;
  handleDateOpen: () => void;
  handleSelect: (value: RangeKeyDict) => void;
}

const DatePicker: FC<IDatePicker> = ({
  type, outwardDate, returnDate, range,  dateOpen, handleOneway,
  handleDateOpen, handleSelect
}) => {
  const [changed, setChanged] = useState(false);

  const onewayClose = () => {
    setChanged(false);
    handleOneway && handleOneway(true);
    handleDateOpen();
  };

  const defaultClose = () => {
    setChanged(false);
    handleDateOpen();
  };

  const onChange = (rangesByKey: RangeKeyDict) => {
    handleSelect(rangesByKey);
    if (!changed) setChanged(true);
    else {
      setChanged(false);
      handleDateOpen();
    }
  };

  return (
    <div className={light.searchDate}>
      <div className={light.searchDivider}/>
      <DateSelect
        label="Outward"
        selected={outwardDate}
        handleSelect={handleDateOpen}
      />
      <div className={light.searchDivider}/>
      <DateSelect
        label="Return"
        selected={returnDate}
        handleSelect={handleDateOpen}
      />
      {dateOpen && (
        <div className={light.searchCalendar}>
          <div className={light.calendarControl}>
            {type === searchTypes.trip && (
              <button
                type="button"
                className={light.controlWay}
                onClick={onewayClose}
              >
                <span className={light.wayTitle}>
                  Oneway
                </span>
              </button>
            )}
            {type === searchTypes.hotel && (<div />)}
            <button
              type="button"
              className={light.controlClose}
              onClick={defaultClose}
            >
              <span className={light.closeTitle}>
                +
              </span>
            </button>
          </div>
          <DateRangePicker
            ranges={[range]}
            minDate={new Date()}
            onChange={onChange}
            rangeColors={["#FFD464"]}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
