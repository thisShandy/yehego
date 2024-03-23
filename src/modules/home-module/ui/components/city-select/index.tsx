import type { FC } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";

import { useState} from "react";
import Flag from "react-world-flags";

import OutsideLayout from "~/common/ui/layouts/outside-layout";

import light from "./style/light.module.scss";

interface ICitySelect extends ITest {
  label: string;
  selected: null | string;
}

const CitySelect: FC<ICitySelect> = ({
  testId, label, selected
}) => {
  const inputTest = `${testId}_input`;
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive(prev => {
      if (!prev) document.getElementById(inputTest)!.focus();
      return !prev
    });
  };

  return (
    <button
      type="button"
      className={light.cityContainer}
      onClick={handleActive}
    >
      <span className={light.cityLabel}>{label}</span>
      <input
        id={inputTest}
        value={selected!}
        placeholder="Select city"
        className={light.cityInput}
      />
      {active && (
        <div className={light.citySearch}>
          <OutsideLayout
            active={active}
            setActive={handleActive}
          >
            <div className={light.searchContent}>
              <button
                type="button"
                className={light.searchItem}
              >
                <Flag code="nor" height="16"/>
                <span className={light.itemTitle}>
                  Oslo
                </span>
              </button>
              <button
                type="button"
                className={light.searchItem}
              >
                <Flag code="swe" height="16"/>
                <span className={light.itemTitle}>
                  Stockholm
                </span>
              </button>
              <button
                type="button"
                className={light.searchItem}
              >
                <Flag code="swe" height="16"/>
                <span className={light.itemTitle}>
                  Malmo
                </span>
              </button>
              <button
                type="button"
                className={light.searchItem}
              >
                <Flag code="swe" height="16"/>
                <span className={light.itemTitle}>
                  Gothenburg
                </span>
              </button>
            </div>
          </OutsideLayout>
        </div>
      )}
    </button>
  );
};

export default CitySelect;
