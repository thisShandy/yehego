import { useState } from "react";

import { searchTypes } from "~/common/lib/configs/search/search-types.ts";

export const useSearchType = (clearTripSearch: () => void) => {
  const [accordion, setAccordion] = useState<boolean>(false);
  const [accordionClosing, setAccordionClosing] = useState<boolean>(false);

  const handleAccordion = () => {
    if (accordion) {
      setAccordionClosing(true);
      setTimeout(() => {
        setAccordion(false);
        setAccordionClosing(false);
      }, 200);
    } else setAccordion(true);
  };

  const [type, setType] = useState(searchTypes.trip);
  const [dateOpen, setDateOpen] = useState(false);
  const [typeClosing, setTypeClosing] = useState<null | string>(null);

  const handleTrip = () => {
    setAccordion(false);
    setTypeClosing(searchTypes.hotel);
    setDateOpen(false);

    setTimeout(() => {
      setType(searchTypes.trip);
      setTypeClosing(null);
    }, 500);
  };

  const handleHotel = () => {
    setAccordion(false);
    setTypeClosing(searchTypes.trip);
    setDateOpen(false);

    setTimeout(() => {
      setType(searchTypes.hotel);
      setTypeClosing(null);
      clearTripSearch();
    }, 500);
  };

  const handleDateOpen = () => {
    setDateOpen((prev) => !prev);
  };

  return {
    type,
    typeClosing,
    handleTrip,
    handleHotel,
    dateOpen,
    handleDateOpen,
    accordion,
    accordionClosing,
    handleAccordion
  };
};
