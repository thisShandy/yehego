import type { ChangeEvent } from "react";
import type { AxiosResponse } from "axios";
import type { IAuthForm } from "~/modules/auth-module/lib/types/auth-form.type.ts";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { userState } from "~/common/model/recoil/user.ts";

import api from "~/modules/auth-module/model/api";
import apiUser from "~/common/model/api";

const initial = {
  email: "",
  password: ""
};

export const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

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

      localStorage.setItem("access_token", JSON.stringify(response.data.access_token));

      const { data } = await apiUser.user.getUser();
      setUser(data);

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
