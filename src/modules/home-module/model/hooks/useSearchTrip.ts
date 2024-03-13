import { useState } from "react";

export const useSearchTrip = () => {
  const [accordion, setAccordion] = useState<boolean>(false);
  const [accordionClosing, setAccordionClosing] = useState<boolean>(false);

  const handleAccordion = () => {
    if (accordion) {
      setAccordionClosing(true);
      setTimeout(() => {
        setAccordion(false);
        setAccordionClosing(false);
      }, 200);
    } else {
      setAccordion(true);
    }
  };

  const clearTripSearch = () => {
    setAccordion(false);
  };

  return {
    accordion,
    accordionClosing,
    handleAccordion,
    clearTripSearch
  };
};
