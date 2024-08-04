import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import api from "~/common/model/api";
import apiCompany from "~/modules/settings-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

import { userCreateForm } from "~/modules/settings-module/lib/configs/user-create-form.ts";

export const useManualInvite = () => {
  const user = useRecoilValue(userState);
  const [userConfig, setUserConfig] = useState(userCreateForm);

  useEffect(() => {
    (async () => {
      const { data: offices } = await api.company.getOffices();
      const { data: departments } = await api.company.getDepartments();

      setUserConfig((prev) =>
        prev.map((item) => {
          const newItem = item;

          if (item.name === "office_id") {
            newItem.config = offices.map((el) => ({
              key: el.id.toString(),
              value: el.name
            }));
          }

          if (item.name === "department_id") {
            newItem.config = departments.map((el) => ({
              key: el.id.toString(),
              value: el.name
            }));
          }

          return item;
        })
      );
    })();
  }, []);

  const handleSubmit = async (data: any) => {
    const newData = {
      ...data,
      middle_name: data.not_have_middle_name === "true" ? null : data.middle_name === "" ? null : data.middle_name,
      not_have_middle_name: data.not_have_middle_name === "true"
    };

    await apiCompany.company.inviteManual(user!.company.uuid, newData);
    console.log(data);
  };

  return {
    userConfig,
    handleSubmit
  };
};
