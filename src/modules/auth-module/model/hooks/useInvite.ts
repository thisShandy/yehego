import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import queryString from "query-string";

import api from "~/modules/auth-module/model/api";

import { inviteForm } from "~/modules/auth-module/lib/configs/invite-form.ts";

export const useInvite = () => {
  const parsed: any = queryString.parse(location.search);
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState(inviteForm);

  useEffect(() => {
    (async () => {
      if (!parsed.token) {
        toast.error("Token does not provided", {
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
        return navigate("/login");
      }

      setLoading(true);
      try {
        const { data } = await api.invite.validateToken(parsed.token);

        if (!data.isValid) {
          throw new Error();
        }

        setForm((prev) =>
          prev.map((formItem) => {
            const newFormItem = formItem;

            if (newFormItem.name === "email") {
              newFormItem.value = data.email;
            }

            return newFormItem;
          })
        );

        if (!data.login_methods.find((el: string) => el === "password")) {
          setForm((prev) => prev.filter((item) => item.name !== "password" && item.name !== "repeat_password"))
        }
      } catch (e) {
        toast.error("Invalid token", {
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
        return navigate("/login");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSubmit = async (payload: any) => {
    const newPayload = {
      ...payload,
      token: parsed.token,
      not_have_middle_name: payload.not_have_middle_name === "true"
    };

    if (newPayload.password !== newPayload.repeat_password) {
      throw {
        response: {
          status: 422,
          data: {
            errors: { repeat_password: "Passwords doesn't match" }
          }
        }
      };
    }

    const { data } = await api.invite.consumeInvitation(newPayload);

    localStorage.setItem("access_token", JSON.stringify(data.access_token));

    setTimeout(() => {
      navigate("/");
    });
  };

  return {
    loading,
    form,
    handleSubmit
  };
};
