import type { ChangeEvent } from "react";

import { useEffect, useState, useCallback } from "react";
import { useRecoilValue } from "recoil";

import { userState } from "~/common/model/recoil/user.ts";
import * as _ from "lodash";
import homeApi from "~/modules/home-module/model/api";
import { Bounce, toast } from "react-toastify";

export const usePassengers = () => {
  const [active, setActive] = useState<boolean>(false);

  const [passengers, setPassengers] = useState<
    {
      uuid: string;
      email: string;
      firstname: string;
      lastname: string;
      phone: string;
      status: string;
      date_of_birth: string;
    }[]
  >([]);
  const [passengersValue, setPassengersValue] = useState<string>("");
  const [passengersResults, setPassengersResults] = useState<
    {
      uuid: string;
      email: string;
      firstname: string;
      lastname: string;
      phone: string;
      status: string;
      date_of_birth: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const user = useRecoilValue(userState);

  useEffect(() => {
    if (!user) return;

    setPassengers([
      {
        uuid: user.uuid,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        status: user.status,
        date_of_birth: user.date_of_birth
      }
    ]);
  }, [user]);

  const handleActive = () => {
    setPassengersValue("");
    setPassengersResults([]);
    setActive((prev) => !prev);
  };

  const debounceSearch = useCallback(
    _.debounce(async (value: string) => {
      if (value === "") {
        setPassengersResults([]);

        return setLoading(false);
      }

      try {
        const { data } = await homeApi.passengers.searchPassengers(value);

        setPassengersResults(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 1500),
    []
  );

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setError(false);
    setPassengersValue(e.target.value);
    debounceSearch(e.target.value);
  };

  const handleAddOrRemove = (newPassenger: {
    uuid: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    status: string;
    date_of_birth: string;
  }) => {
    const isExist = passengers.find((pass) => pass.uuid === newPassenger.uuid);
    if (isExist) {
      if (passengers.length === 1)
        return toast.error("You can't remove last passenger", {
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
      setPassengers((prev) => [...prev.filter((el) => el.uuid !== newPassenger.uuid)]);
    } else {
      setPassengers((prev) => [...prev, newPassenger]);
    }
  };

  return {
    active,
    handleActive,
    passengers,
    loading,
    error,
    passengersValue,
    passengersResults,
    handleUpdate,
    handleAddOrRemove
  };
};
