import type { FC } from "react";

import light from "./style/light.module.scss";

interface ICitySelect {
  label: string;
  selected: null | string;
}

const CitySelect: FC<ICitySelect> = ({ label, selected }) => {
  return (
    <button type="button" className={light.cityContainer}>
      <span className={light.cityLabel}>{label}</span>
      {selected && <span className={light.citySelected}>{selected}</span>}
      {!selected && <span className={light.cityPlaceholder}>Select city</span>}
    </button>
  );
};

export default CitySelect;
