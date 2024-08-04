import { useState } from "react";

export const useTimeSelect = () => {
  const [selectedTime, setSelectedTime] = useState<null | string>(null);

  const handleSelect = (value: null | string) => {
    if (value === "0") return setSelectedTime(null);
    setSelectedTime(value);
  };

  return {
    selectedTime,
    handleSelect
  };
};
