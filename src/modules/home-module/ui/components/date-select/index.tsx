import type { FC } from "react";

import light from "./styles/light.module.scss";

interface IDateSelect {
  label: string;
  selected: null | string;
  handleSelect: () => void;
}

const DateSelect: FC<IDateSelect> = ({ label, selected, handleSelect }) => {
  return (
    <button type="button" className={light.dateContainer} onClick={handleSelect}>
      <span className={light.dateLabel}>{label}</span>
      {selected && <span className={light.dateSelected}>{selected}</span>}
      {!selected && <span className={light.datePlaceholder}>Select date</span>}
    </button>
  );
};

export default DateSelect;
