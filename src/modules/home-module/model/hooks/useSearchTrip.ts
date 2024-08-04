import { useState } from "react";

import { useDateSelect } from "~/modules/home-module/model/hooks/useDateSelect.ts";

import { dateFormat } from "~/common/lib/configs/date/date-format.ts";

export const useSearchTrip = () => {
  const [oneway, setOneway] = useState<boolean>(true);

  const { dateSelected, setDateSelected, selectionRange, handleSelect } = useDateSelect();

  const form = {
    oneway,
    outwardCity: null,
    returnCity: null,
    outwardDate:
      dateSelected && selectionRange.startDate
        ? selectionRange.startDate.toLocaleDateString("en-US", dateFormat)
        : null,
    returnDate:
      !oneway && dateSelected && selectionRange.endDate
        ? selectionRange.endDate.toLocaleDateString("en-US", dateFormat)
        : null,
    rangeDate: selectionRange
  };

  const handleOneway = (value?: boolean) => {
    setOneway((prev) => (typeof value === "boolean" ? value : !prev));
  };

  const formActions = {
    oneway: handleOneway,
    date: handleSelect
  };

  const clearTripSearch = () => {
    setDateSelected(false);
  };

  return {
    form,
    formActions,
    selectionRange,
    clearTripSearch
  };
};
