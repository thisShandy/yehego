import { useState } from "react";

import { searchTypes } from "~/common/lib/configs/search/search-types.ts";

export const useSearchType = (
  clearTripSearch: () => void
) => {
  const [ type, setType ] = useState(searchTypes.trip);
  const [ typeClosing, setTypeClosing ] = useState<null | string>(null);

  const handleTrip = () => {
    setTypeClosing(searchTypes.hotel);

    setTimeout(() => {
      setType(searchTypes.trip);
      setTypeClosing(null);
    }, 500);
  };

  const handleHotel = () => {
    setTypeClosing(searchTypes.trip);

    setTimeout(() => {
      setType(searchTypes.hotel);
      setTypeClosing(null);
      clearTripSearch();
    }, 500);
  };

  return {
    type,
    typeClosing,
    handleTrip,
    handleHotel,
  };
};
