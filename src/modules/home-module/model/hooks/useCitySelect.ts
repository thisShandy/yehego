import { useState } from "react";

export const useCitySelect = () => {
  const [selectedCity, setSelectedCity] = useState<{
    name: string;
    cityCode: string;
    countryCode: string;
    id: string;
    key: string;
    latitude: string;
    longitude: string;
  }>({
    name: "",
    cityCode: "",
    countryCode: "",
    id: "",
    key: "",
    latitude: "",
    longitude: ""
  });

  const handleSelect = (city: {
    name: string;
    cityCode: string;
    countryCode: string;
    id: string;
    key: string;
    latitude: string;
    longitude: string;
  }) => {
    console.log("city", city);
    setSelectedCity(city);
  };

  return {
    selectedCity,
    handleSelect
  };
};
