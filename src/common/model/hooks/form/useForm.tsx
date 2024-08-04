import type { AxiosResponse } from "axios";
import type { IFormItem } from "~/common/lib/types/form/form-item.type.ts";

import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";

export const useForm = (
  formConfig: IFormItem[],
  submit: (data: any) => Promise<AxiosResponse<any, any>>,
  message?: string
) => {
  const initState = Object.fromEntries(formConfig.map((item) => [item.name, item.value]));

  if (formConfig.find((item) => item.confirm)) {
    initState[formConfig.find((item) => item.confirm)!.confirm!.name] = formConfig
      .find((item) => item.confirm)!
      .confirm!.value.toString();
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState(initState);

  const [errors, setErrors] = useState(
    Object.fromEntries(formConfig.map((item) => [item.name, null as null | string]))
  );

  const [globalError, setGlobalError] = useState<null | string>(null);

  useEffect(() => {
    setValues(Object.fromEntries(formConfig.map((item) => [item.name, item.value])));
    setGlobalError(null);
    setErrors(Object.fromEntries(formConfig.map((item) => [item.name, null as null | string])));

    if (formConfig.find((item) => item.confirm)) {
      setValues((prev) => ({
        ...prev,
        [formConfig.find((item) => item.confirm)!.confirm!.name]: formConfig
          .find((item) => item.confirm)!
          .confirm!.value.toString()
      }));
    }
  }, [formConfig]);

  const handleUpdate = (key: string, value: string) => {
    setErrors((prev) => ({
      ...prev,
      [key]: null
    }));
    setValues((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await submit({
        ...values,
        george: 1
      });

      toast.success(message || "Successfully updated", {
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
      if (e.response.status === 422) {
        setErrors((prev) => ({
          ...prev,
          ...e.response.data.errors
        }));
      }

      if (e.response.status === 400) {
        setGlobalError(e.response.data.message);
      }
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    values,
    errors,
    globalError,
    handleUpdate,
    handleSubmit
  };
};
