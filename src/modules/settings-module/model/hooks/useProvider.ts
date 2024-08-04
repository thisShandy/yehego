import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Bounce, toast } from "react-toastify";

import api from "~/modules/settings-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

import { providersList } from "~/modules/settings-module/lib/configs/providers-list.ts";

export const useProvider = (get: boolean) => {
  const user = useRecoilValue(userState);
  const [loading, setLoading] = useState<boolean>(false);
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);

  const [providers, setProviders] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (get && user) {
        try {
          const { data } = await api.company.getProvider(user.company.uuid);

          setProviders(data.data);
        } catch (e) {
          toast.error("Error occurred while trying to get providers", {
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
          setLoading(false);
        }
      }
    })();
  }, [user, removeLoading]);

  const handleDelete = async (contractId: string) => {
    setRemoveLoading(true);
    try {
      await api.company.removeProvider(user!.company.uuid, contractId);

      toast.success(`Successfully deleted`, {
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
      toast.error(`Error occurred while trying to delete provider`, {
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
      setRemoveLoading(false);
    }
  };

  const [form, setForm] = useState({
    provider: providersList[0].name,
    contract_id: "",
    customer_id: ""
  });

  const [globalError, setGlobalError] = useState<null | string>(null);
  const [errors, setErrors] = useState({
    provider: null as null | string,
    contract_id: null as null | string,
    customer_id: null as null | string
  });

  const handleUpdate = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value
    }));

    setGlobalError(null);
    setErrors((prev) => ({
      ...prev,
      [key]: null
    }));
  };

  const handleSubmit = async () => {
    setLoading(false);
    try {
      await api.company.createProvider(user!.company.uuid, form);

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
        provider: providersList[0].name,
        contract_id: "",
        customer_id: ""
      });
    } catch (e: any) {
      if (e.response.status === 422) {
        setErrors((prev) => ({
          ...prev,
          ...e.response.data.errors
        }));
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
    providers,
    form,
    globalError,
    errors,
    handleDelete,
    handleUpdate,
    handleSubmit
  };
};
