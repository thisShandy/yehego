import type { ChangeEvent } from "react";
import type { ICity } from "~/common/lib/types/search/city.type.ts";

import { useState, useCallback } from "react";
import * as _ from "lodash";
import homeApi from "~/modules/home-module/model/api";

export const useCity = (handleSelect: (city: ICity) => void) => {
  const [searchValue, setSearchValue] = useState<null | string>(null);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<boolean>(false);

  const [searchResults, setSearchResults] = useState<ICity[]>([]);

  const debounceSearch = useCallback(
    _.debounce(async (value: string) => {
      if (value === "") {
        setSearchValue(null);
        setSearchResults([]);

        return setSearchLoading(false);
      }

      try {
        const { data } = await homeApi.city.searchCity(value);

        setSearchResults(data.data);
      } catch (e) {
        setSearchError(true);
      } finally {
        setSearchLoading(false);
      }
    }, 1500),
    []
  );

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    handleSelect({
      name: "",
      cityCode: "",
      countryCode: "",
      id: "",
      key: "",
      latitude: "",
      longitude: ""
    });
    setSearchLoading(true);
    setSearchError(false);
    setSearchValue(e.target.value);
    debounceSearch(e.target.value);
  };

  return {
    searchValue,
    searchLoading,
    searchError,
    setSearchValue,
    handleUpdate,
    searchResults
  };
};
