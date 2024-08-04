import { useEffect, useState } from "react";

import { bookedApi } from "~/modules/booked-module/model/api";

export const useUpcomingHotels = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState(1);
  const [hotels, setHotels] = useState<any[]>([]);

  const handleGetHotels = async () => {
    setLoading(true);
    try {
      const isCompany = location.pathname.split("/").find((el) => el === "company");
      if (isCompany) {
        const { data } = await bookedApi.hotels.getCompanyHotels(filter);
        setHotels(data.data);
      } else {
        const { data } = await bookedApi.hotels.getUserHotels(filter);
        setHotels(data.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await handleGetHotels();
    })();
  }, [filter]);

  return {
    loading,
    hotels,
    filter,
    setFilter
  };
};
