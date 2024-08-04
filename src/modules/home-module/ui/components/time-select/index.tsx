import type { FC } from "react";
import { useState } from "react";

import light from "./styles/light.module.scss";
import OutsideLayout from "~/common/ui/layouts/outside-layout";
import WheelSelect from "~/modules/home-module/ui/components/wheel-select";

interface ITimeSelect {
  label: string;
  selected: null | string;
  handleSelect: (value: null | string) => void;
}

const TimeSelect: FC<ITimeSelect> = ({ label, selected, handleSelect }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <button type="button" className={light.timeContainer} onClick={handleActive}>
      <span className={light.timeLabel}>{label}</span>
      {selected && (
        <div className={light.timeSelectedContainer}>
          <span className={light.timeSelected}>{selected}</span>
          <button type="button" className={light.timeClose}>
            <span className={light.closeTitle}>+</span>
          </button>
        </div>
      )}
      {!selected && <span className={light.timePlaceholder}>Select time</span>}
      {active && (
        <div className={light.timeWrapper}>
          <OutsideLayout active={active} setActive={handleActive}>
            <div className={light.timeSelect}>
              <WheelSelect
                data={[
                  "1:00",
                  "2:00",
                  "3:00",
                  "4:00",
                  "5:00",
                  "6:00",
                  "7:00",
                  "8:00",
                  "9:00",
                  "10:00",
                  "11:00",
                  "12:00",
                  "13:00",
                  "14:00",
                  "15:00",
                  "16:00",
                  "17:00",
                  "18:00",
                  "19:00",
                  "20:00",
                  "21:00",
                  "22:00",
                  "23:00",
                  "00:00"
                ]}
                perspective="center"
                handleUpdate={handleSelect}
              />
            </div>
          </OutsideLayout>
        </div>
      )}
    </button>
  );
};

export default TimeSelect;
