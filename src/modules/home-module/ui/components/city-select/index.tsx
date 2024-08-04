import type { FC } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";
import type { ICity } from "~/common/lib/types/search/city.type.ts";

import { useState } from "react";
import Flag from "react-world-flags";

import { useCity } from "~/modules/home-module/model/hooks/useCity.ts";

import OutsideLayout from "~/common/ui/layouts/outside-layout";

import light from "./style/light.module.scss";

interface ICitySelect extends ITest {
  label: string;
  selected: string;
  handleSelect: (city: ICity) => void;
  defaultCities: ICity[];
}

const CitySelect: FC<ICitySelect> = ({ testId, label, selected, handleSelect, defaultCities }) => {
  const inputTest = `${testId}_input`;
  const [active, setActive] = useState<boolean>(false);

  const { searchValue, searchLoading, searchError, setSearchValue, handleUpdate, searchResults } =
    useCity(handleSelect);

  const handleActive = () => {
    setActive((prev) => {
      if (!prev) document.getElementById(inputTest)!.focus();
      return !prev;
    });
  };

  return (
    <button type="button" className={light.cityContainer} onClick={handleActive}>
      <span className={light.cityLabel}>{label}</span>
      <div className={light.cityInputContainer}>
        <input
          id={inputTest}
          value={searchValue! || selected}
          placeholder="Select city"
          autoComplete="off"
          className={light.cityInput}
          onChange={handleUpdate}
          onBlur={() => {
            setSearchValue("");
          }}
        />
        {selected && (
          <button
            type="button"
            className={light.cityClose}
            onClick={() =>
              handleSelect({
                name: "",
                cityCode: "",
                countryCode: "",
                id: "",
                key: "",
                latitude: "",
                longitude: ""
              })
            }
          >
            <span className={light.closeTitle}>+</span>
          </button>
        )}
      </div>
      {active && (
        <div className={light.citySearch}>
          <OutsideLayout active={active} setActive={handleActive}>
            <div className={`${light.searchContent} ${searchLoading && light.loading}`}>
              {searchLoading && <div className={light.searchLoader} />}
              {!searchLoading &&
                !searchError &&
                !searchResults.length &&
                defaultCities.map((el) => (
                  <button key={el.id} type="button" className={light.searchItem} onClick={() => handleSelect(el)}>
                    <Flag code={el.countryCode} height="16" />
                    <span className={light.itemTitle}>{el.name}</span>
                  </button>
                ))}
              {!searchLoading &&
                !searchError &&
                !!searchResults.length &&
                searchResults.map((el) => (
                  <button key={el.id} type="button" className={light.searchItem} onClick={() => handleSelect(el)}>
                    <Flag code={el.countryCode} height="16" />
                    <span className={light.itemTitle}>{el.name}</span>
                  </button>
                ))}
            </div>
          </OutsideLayout>
        </div>
      )}
    </button>
  );
};

export default CitySelect;
