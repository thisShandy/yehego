import type { ChangeEvent } from "react";
import type { AxiosResponse } from "axios";

import { useState } from "react";
import { Bounce, toast } from "react-toastify";

import api from "~/modules/settings-module/model/api";

export const useDepartmentOffice = (handleCreate?: (name: string) => Promise<AxiosResponse<any, any>>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const handleDelete = async (type: string, id: string) => {
    setLoading(true);
    try {
      if (type === "office") await api.company.removeOffice(id);
      if (type === "department") await api.company.removeDepartment(id);

      toast.success("Successfully deleted", {
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
      toast.error(`Error occurred while trying to delete ${type}`, {
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
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      handleCreate && (await handleCreate(name));

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

      setName("");
    } catch (e) {
      toast.error("Error occurred", {
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
  };

  return {
    loading,
    name,
    handleDelete,
    handleUpdate,
    handleSubmit
  };
};
