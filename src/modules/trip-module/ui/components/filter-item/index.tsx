import type { FC } from "react";

import light from "./styles/light.module.scss";
import arrow_down from "~icons/arrow/arrow_down.svg";

interface IFilterItem {
  name: string;
}

const FilterItem: FC<IFilterItem> = ({ name }) => {
  return (
    <button type="button" className={light.filterContainer}>
      <span className={light.filterName}>{name}</span>
      <div className={light.filterButton}>
        <img className={light.buttonIcon} src={arrow_down} alt="arrow_down" />
      </div>
    </button>
  );
};

export default FilterItem;
