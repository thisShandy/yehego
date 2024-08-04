import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import api from "~/modules/settings-module/model/api";

export const useLoyalty = (id?: string) => {
  const [loyalties, setLoyalties] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.user.getLoyalties();

        setLoyalties(data.data);
      } catch (e) {
        toast.error("Error occurred trying to get loyalties, try again later", {
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
      }
    })();
  }, []);

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    loyalty_uuid: "",
    number: ""
  });

  const [errors, setErrors] = useState({
    loyalty_uuid: null as null | string,
    number: null as null | string
  });

  const handleUpdate = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    try {
      toast.success("Successfully saved", {
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

      setForm({
        loyalty_uuid: "",
        number: ""
      });
    } catch (e: any) {
      if (e.response.status === 422) {
        setErrors((prev) => ({
          ...prev,
          ...e.response.data.errors
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    form,
    errors,
    loyalties,
    handleUpdate,
    handleSubmit
  };
};
