import { useState } from "react";

export const useClassSelect = () => {
  const [selectedClass, setSelectedClass] = useState<null | string>(null);

  const handleSelect = (value: string) => {
    setSelectedClass(value);
  };

  return {
    selectedClass,
    handleSelect
  };
};
