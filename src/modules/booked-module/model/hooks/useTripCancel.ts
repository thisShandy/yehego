import { useState } from "react";
import { Bounce, toast } from "react-toastify";

import { bookedApi } from "~/modules/booked-module/model/api";

export const useTripCancel = (trip: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState({
    amount: 0,
    currency: ""
  });

  const handleGetAmount = async (part: string) => {
    setLoading(true);
    try {
      const { data } = await bookedApi.trips.getRefundAmount(trip, part);

      setAmount(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelTrip = async (part: string) => {
    setCancelLoading(true);
    try {
      await bookedApi.trips.cancelTrip(trip, part);

      toast.success("Successfully canceled", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
    } catch (e) {
      toast.error("Error occurred while trying to cancel trip", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
    } finally {
      setCancelLoading(false);
    }
  };

  return {
    loading,
    cancelLoading,
    amount,
    handleGetAmount,
    handleCancelTrip
  };
};
