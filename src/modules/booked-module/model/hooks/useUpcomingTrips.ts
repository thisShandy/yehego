import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { bookedApi } from "~/modules/booked-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

export const useUpcomingTrips = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState({
    startPage: 1,
    lastPage: null as null | number,
    currentPage: 1
  });
  const [tripFilter, setTripFilter] = useState<null | string>(null);
  const [trips, setTrips] = useState([]);

  const user = useRecoilValue(userState);

  const handleGetTrips = async (pageNum?: number) => {
    if (!user) return;
    setLoading(true);

    const userUuid = location.pathname.split("/").find((el) => el === "company") ? null : user.uuid;

    try {
      const { data } = await bookedApi.trips.getUpcomingTrips(pageNum || page.currentPage, userUuid, tripFilter);

      setTrips(data.data);
      setPage((prev) => ({
        ...prev,
        currentPage: data.meta.current_page,
        lastPage: data.meta.last_page
      }));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await handleGetTrips();
    })();
  }, [user]);

  useEffect(() => {
    (async () => {
      await handleGetTrips();
    })();
  }, [tripFilter]);

  return {
    loading,
    page,
    setPage,
    trips,
    tripFilter,
    setTripFilter,
    handleGetTrips
  };
};
