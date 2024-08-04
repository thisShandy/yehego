import type { FC } from "react";

import { useState } from "react";

import OutsideLayout from "~/common/ui/layouts/outside-layout";

import light from "./styles/light.module.scss";
import arrow_down from "~icons/arrow/arrow_down.svg";

interface IClassSelect {
  label: string;
  selected: null | string;
  placeholder: string;
  handleSelect: (value: string | null) => void;
}

const ClassSelect: FC<IClassSelect> = ({ label, selected, placeholder, handleSelect }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <button type="button" className={light.classContainer} onClick={handleActive}>
      <span className={light.classLabel}>{label}</span>
      <div className={light.classInfo}>
        <span className={`${light.infoTitle} ${!selected && light.placeholder}`}>{selected || placeholder}</span>
        <img className={light.infoIcon} src={arrow_down} alt="arrow_down" />
      </div>
      {active && (
        <div className={light.classSearch}>
          <OutsideLayout active={active} setActive={handleActive}>
            <div className={light.searchContent}>
              <button type="button" className={light.searchItem} onClick={() => handleSelect(null)}>
                <span className={light.itemTitle}>-</span>
              </button>
              <button type="button" className={light.searchItem} onClick={() => handleSelect("Economy")}>
                <span className={light.itemTitle}>Economy</span>
              </button>
              <button type="button" className={light.searchItem} onClick={() => handleSelect("Economy Premium")}>
                <span className={light.itemTitle}>Economy Premium</span>
              </button>
              <button type="button" className={light.searchItem} onClick={() => handleSelect("First")}>
                <span className={light.itemTitle}>First</span>
              </button>
              <button type="button" className={light.searchItem} onClick={() => handleSelect("Business")}>
                <span className={light.itemTitle}>Business</span>
              </button>
            </div>
          </OutsideLayout>
        </div>
      )}
    </button>
  );
};

export default ClassSelect;
