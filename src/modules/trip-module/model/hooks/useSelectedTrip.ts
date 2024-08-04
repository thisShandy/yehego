import { useState } from "react";

export const useSelectedTrip = () => {
  const [selected, setSelected] = useState({
    outward: null,
    inward: null,
    round: null
  });

  const setSelectedTrip = (type: string, data: any) => {
    setSelected((prev) => ({
      ...prev,
      [type]: data
    }));
  };

  return {
    selected,
    setSelectedTrip
  };
};
