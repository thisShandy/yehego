import type { ChangeEvent } from "react";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Bounce, toast } from "react-toastify";

import api from "~/modules/settings-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

export const useEmailInvite = () => {
  const user = useRecoilValue(userState);

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    email_1: "",
    email_2: "",
    email_3: "",
    email_4: ""
  });

  const [errors, setErrors] = useState({
    email_1: null as null | string,
    email_2: null as null | string,
    email_3: null as null | string,
    email_4: null as null | string
  });

  const handleUpdate = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: null
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      Object.entries(form).map(async ([key, value]) => {
        try {
          if (value === "") return;

          await api.company.inviteUser(user!.company.uuid, value);
          toast.success(`Successfully invited ${value}`, {
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
        } catch (e: any) {
          if (e.response.status === 422 && e.response.data.errors.email) {
            setErrors((prev) => ({
              ...prev,
              [key]: e.response.data.errors.email
            }));
          }
        }
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    form,
    errors,
    handleUpdate,
    handleSubmit
  };
};
