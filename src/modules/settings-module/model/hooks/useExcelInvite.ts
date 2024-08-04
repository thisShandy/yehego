import type { ChangeEvent } from "react";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Bounce, toast } from "react-toastify";

import api from "~/modules/settings-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

export const useExcelInvite = () => {
  const user = useRecoilValue(userState);

  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!file) return;
      await api.company.inviteExcel(user!.company.uuid, file);

      toast.success("Successfully sent", {
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
      toast.error("Error occurred while trying to send file", {
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
    file,
    handleSelect,
    handleSubmit
  };
};
