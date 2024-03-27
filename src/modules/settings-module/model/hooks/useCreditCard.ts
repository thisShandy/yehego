import type { AxiosResponse } from "axios";

import { useState } from "react";
import { toast, Bounce } from "react-toastify";

export const useCreditCard = (submit: (data: any) => Promise<AxiosResponse<any, any>>) => {
  const [loading, setLoading] = useState<boolean>();
  const [form, setForm] = useState({
    number: "",
    type: "",
    expiration: "",
    cardholder: "",
  });
  const [errors, setErrors] = useState({
    number: null as null | string,
    type: null as null | string,
    expiration: null as null | string,
    cardholder: null as null | string,
    name: null as null | string,
    lastName: null as null | string,
  });

  const [globalError, setGlobalError] = useState<null | string>(null);


  const handleUpdate = (key: string, value: string) => {
    setErrors(prev => ({
      ...prev,
      [key]: null,
    }));
    if (key === "cardholder") {
      setErrors(prev => ({
        ...prev,
        name: null,
        lastName: null,
      }));
      return setForm(prev => ({
        ...prev,
        [key]: value.toUpperCase(),
      }));
    }
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = {
        ...form,
        number: form.number.split(" ").join(""),
        name: form.cardholder.split(" ")[0],
        lastName: form.cardholder.split(" ")?.[1],
      };
      await submit(data);

      toast.success("Successfully updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setForm({
        number: "",
        type: "",
        expiration: "",
        cardholder: "",
      });
    } catch (e: any) {
      if (e.response.status === 422) {
        setErrors(prev => ({
          ...prev,
          ...e.response.data.errors,
        }))
      }

      if (e.response.status === 400) {
        setGlobalError(e.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    form,
    errors,
    globalError,
    handleUpdate,
    handleSubmit
  };
};
