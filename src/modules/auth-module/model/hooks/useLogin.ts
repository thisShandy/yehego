import type { ChangeEvent } from "react";
import type { AxiosResponse } from "axios";
import type { IAuthForm } from "~/modules/auth-module/lib/types/auth-form.type.ts";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "~/modules/auth-module/model/api";

const initial = {
  email: "",
  password: ""
};

export const useLogin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<IAuthForm>(initial);
  const [error, setError] = useState<boolean>(false);

  const handleUpdate = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setError(false);

    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = (await api.login.loginUser(form)) as AxiosResponse<{ access_token: string }>;

      localStorage.setItem("@accessToken", JSON.stringify(response.data.access_token));

      setTimeout(() => {
        navigate("/");
      });
    } catch (e) {
      console.log(e);
      setError(true);
      setForm(initial);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    handleUpdate,
    handleLogin,
    loading,
    error
  };
};
