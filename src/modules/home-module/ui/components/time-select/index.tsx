import type { FC } from "react";

import light from "./styles/light.module.scss";

interface ITimeSelect {
  label: string;
  selected: null | string;
}

const TimeSelect: FC<ITimeSelect> = ({ label, selected }) => {
  return (
    <button type="button" className={light.timeContainer}>
      <span className={light.timeLabel}>{label}</span>
      {selected && <span className={light.timeSelected}>{selected}</span>}
      {!selected && <span className={light.timePlaceholder}>Select time</span>}
    </button>
  );
};

export default TimeSelect;
