// @ts-nocheck
import { useState } from "react";
import { Calendar } from "react-modern-calendar-datepicker";

import DateSelect from "~/modules/home-module/ui/components/date-select";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./styles/calendar.css";
import light from "./styles/light.module.scss";

const DatePicker = () => {
  const [select, setSelect] = useState(false);
  const defaultFrom = {
    year: 2019,
    month: 4,
    day: 16,
  };
  const defaultTo = {
    year: 2019,
    month: 4,
    day: 19,
  };
  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  };
  const [selectedDayRange, setSelectedDayRange] = useState(
    defaultValue
  );

  const handleSelect = () => {
    setSelect(prev => !prev);
  };

  return (
    <div className={light.searchDate}>
      <div className={light.searchDivider}/>
      <DateSelect
        label="Outward"
        selected={null}
        handleSelect={handleSelect}
      />
      <div className={light.searchDivider}/>
      <DateSelect
        label="Return"
        selected={null}
        handleSelect={handleSelect}
      />
      <div className={light.searchDivider}/>
      <div
        className={`${light.searchPicker} ${select && light.active}`}
      >
        {/*<Calendar*/}
        {/*  value={selectedDayRange}*/}
        {/*  onChange={setSelectedDayRange}*/}
        {/*  colorPrimary="#FFD464"*/}
        {/*  colorPrimaryLight="rgba(255, 212, 100, 0.4)"*/}
        {/*  shouldHighlightWeekends*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default DatePicker;
