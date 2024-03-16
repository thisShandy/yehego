import type { FC } from "react";

import Flag from "react-world-flags";

import light from "./style/light.module.scss";

interface ICitySelect {
  open?: boolean;
  label: string;
  selected: null | string;
}

const CitySelect: FC<ICitySelect> = ({
  open, label, selected
}) => {
  return (
    <button type="button" className={light.cityContainer}>
      <span className={light.cityLabel}>{label}</span>
      {selected && <span className={light.citySelected}>{selected}</span>}
      {!selected && <span className={light.cityPlaceholder}>Select city</span>}
      {open && (
        <div className={light.citySearch}>
          <div className={light.searchInput}>
            <input
              type="text"
              placeholder="Search city"
              className={light.inputField}
            />
            <button
              type="button"
              className={light.inputClear}
            >
              <span className={light.clearTitle}>
                Clear
              </span>
            </button>
          </div>
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
      )}
    </button>
  );
};

export default CitySelect;
