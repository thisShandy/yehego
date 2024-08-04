import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import api from "~/common/model/api";

import { userState } from "~/common/model/recoil/user.ts";

import { userEditForm } from "~/modules/settings-module/lib/configs/user-edit-form.ts";

export const useProfileEdit = () => {
  const user = useRecoilValue(userState);
  const [loading, setLoading] = useState<boolean>(true);
  const [userConfig, setUserConfig] = useState(userEditForm);

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const { data: offices } = await api.company.getOffices();
          const { data: departments } = await api.company.getDepartments();

          setUserConfig((prev) =>
            prev.map((item) => {
              const newItem = item;
              // @ts-ignore
              newItem.value = user[item.name] === null ? "" : user[item.name].toString();
              if (newItem.confirm) {
                newItem.confirm.value =
                  // @ts-ignore
                  user[newItem.confirm.name] === null ? "" : user[newItem.confirm.name].toString();
              }

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

              return newItem;
            })
          );
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [user]);

  const handleSubmit = async (data: any) => {
    const newData = {
      ...data,
      middle_name: data.not_have_middle_name === "true" ? null : data.middle_name === "" ? null : data.middle_name,
      not_have_middle_name: data.not_have_middle_name === "true"
    };
    await api.user.updateUser(newData);
  };

  return {
    loading,
    userConfig,
    handleSubmit
  };
};
