import type { Range, RangeKeyDict } from "react-date-range";

import { useState } from "react";

export const useDateSelect = () => {
  const [selectionRange, setSelectionRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });
  const [dateSelected, setDateSelected] = useState(false);

  const handleSelect = (ranges: RangeKeyDict) => {
    setSelectionRange(prev => ({
      ...prev,
      startDate: ranges.selection.startDate as Date,
      endDate: ranges.selection.endDate as Date
    }));
    setDateSelected(true);
  };

  return {
    dateSelected,
    setDateSelected,
    selectionRange,
    handleSelect
  };
};
