import { useDateSelect } from "~/modules/home-module/model/hooks/useDateSelect.ts";

import { dateFormat } from "~/common/lib/configs/date/date-format.ts";

export const useSearchHotel = () => {
  const { dateSelected, setDateSelected, selectionRange, handleSelect } = useDateSelect();

  const form = {
    outwardDate:
      dateSelected && selectionRange.startDate
        ? selectionRange.startDate.toLocaleDateString("en-US", dateFormat)
        : null,
    returnDate:
      dateSelected && selectionRange.endDate ? selectionRange.endDate.toLocaleDateString("en-US", dateFormat) : null,
    rangeDate: selectionRange
  };

  const formActions = {
    date: handleSelect
  };

  const clearHotelsSearch = () => {
    setDateSelected(false);
  };

  return {
    form,
    formActions,
    selectionRange,
    clearHotelsSearch
  };
};
