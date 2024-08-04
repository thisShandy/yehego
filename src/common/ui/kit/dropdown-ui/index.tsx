import type { FC } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";
import type { IDropdownOption } from "~/common/lib/types/form/dropdown-option.type.ts";

import { useState } from "react";

import OutsideLayout from "~/common/ui/layouts/outside-layout";

import light from "./styles/light.module.scss";
import arrow_down from "~icons/arrow/arrow_down.svg";

interface IDropdownUi extends ITest {
  name: string;
  value: string;
  error?: null | string;
  placeholder?: string;
  config: IDropdownOption[];
  handleChange: (value: string) => void;
}

const DropdownUi: FC<IDropdownUi> = ({ name, value, error, placeholder = "", config, handleChange }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={light.dropdownWrapper}>
      <button type="button" className={`${light.dropdownContainer} ${error && light.error}`} onClick={handleActive}>
        <span className={light.dropdownTitle}>{error || name}</span>
        {value !== "" && <span className={light.dropdownValue}>{config.find((el) => el.key === value)!.value}</span>}
        {value === "" && <span className={`${light.dropdownValue} ${light.placeholder}`}>{placeholder}</span>}
        <img className={`${light.dropdownArrow} ${active && light.active}`} src={arrow_down} alt="arrow_down" />
      </button>
      <OutsideLayout active={active} setActive={handleActive}>
        <div className={light.dropdownContent}>
          {config.map((item) => (
            <button
              key={item.key}
              type="button"
              className={light.contentItem}
              onClick={() => {
                handleChange(item.key);
                handleActive();
              }}
            >
              <span className={light.itemTitle}>{item.value}</span>
            </button>
          ))}
        </div>
      </OutsideLayout>
    </div>
  );
};

export default DropdownUi;
