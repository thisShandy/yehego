import type { IUser } from "~/common/lib/types/user/user.type.ts";

import { useState, useEffect } from "react";

import api from "~/common/model/api";

import { roleEditForm } from "~/modules/settings-module/lib/configs/role-edit-form.ts";
import { userEditForm } from "~/modules/settings-module/lib/configs/user-edit-form.ts";

export const useUserEdit = (userId?: string) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [user, setUser] = useState<null | IUser>(null);
  const [roleConfig, setRoleConfig] = useState(roleEditForm);
  const [userConfig, setUserConfig] = useState(userEditForm);

  useEffect(() => {
    (async () => {
      if (userId) {
        try {
          const { data: userData } = await api.company.getUserById(userId);
          const { data: offices } = await api.company.getOffices();
          const { data: departments } = await api.company.getDepartments();

          setRoleConfig(prev => prev.map(item => {
            const newItem = item;
            newItem.value = userData.role;

            return newItem;
          }));

          setUserConfig(prev => prev.map(item => {
            const newItem = item;
            // @ts-ignore
            newItem.value = userData[item.name] === null ? "" : userData[item.name].toString();

            if (item.name === "sex") newItem.value = "other";

            if (item.name === "sex" && newItem.value === "other") {
              newItem.value = "unspecified";
            }

            if (item.name === "office_id") {
              newItem.config = offices.map(el => ({
                key: el.id.toString(),
                value: el.name
              }))
            }

            if (item.name === "department_id") {
              newItem.config = departments.map(el => ({
                key: el.id.toString(),
                value: el.name
              }))
            }

            return newItem;
          }));

          setUser(userData);

          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [userId]);

  return {
    loading,
    user,
    roleConfig,
    userConfig
  };
};
