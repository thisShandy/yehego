import type { IUser } from "~/common/lib/types/user/user.type.ts";
import type { ILoyaltyCard } from "~/common/lib/types/user/loyalty-card.type.ts";

import { useState, useEffect } from "react";

import api from "~/common/model/api";

import { roleEditForm } from "~/modules/settings-module/lib/configs/role-edit-form.ts";
import { userEditForm } from "~/modules/settings-module/lib/configs/user-edit-form.ts";

export const useUserEdit = (userId?: string) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [user, setUser] = useState<null | IUser>(null);
  const [loyalties, setLoyalties] = useState<ILoyaltyCard[]>([]);
  const [roleConfig, setRoleConfig] = useState(roleEditForm);
  const [userConfig, setUserConfig] = useState(userEditForm);

  useEffect(() => {
    (async () => {
      if (userId) {
        try {
          const { data: userData } = await api.company.getUserById(userId);
          const { data: loylatyResponse } = await api.company.getUserLoyalty(userId);
          const { data: offices } = await api.company.getOffices();
          const { data: departments } = await api.company.getDepartments();

          const loyaltiesData = loylatyResponse.data;

          setRoleConfig((prev) =>
            prev.map((item) => {
              const newItem = item;
              newItem.value = userData.role;

              return newItem;
            })
          );

          setUserConfig((prev) =>
            prev.map((item) => {
              const newItem = item;
              // @ts-ignore
              newItem.value = userData[item.name] === null ? "" : userData[item.name].toString();

              if (item.name === "sex" && newItem.value === "other") {
                newItem.value = "unspecified";
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

          console.log(loyaltiesData);
          setLoyalties(loyaltiesData);
          setUser(userData);

          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [userId]);

  const getUser = async (userId: string) => {
    const { data: userData } = await api.company.getUserById(userId);
    setUser(userData);
  };

  const updateRole = async (userId: string, data: any) => {
    await api.company.updateUserRole(userId, data);
    await getUser(userId);
  };

  const updateUser = async (userId: string, data: any) => {
    const newData = {
      ...data,
      middle_name: data.not_have_middle_name === "true" ? null : data.middle_name === "" ? null : data.middle_name,
      not_have_middle_name: data.not_have_middle_name === "true"
    };

    await api.company.updateUser(userId, newData);
    await getUser(userId);
  };

  return {
    loading,
    user,
    loyalties,
    roleConfig,
    userConfig,
    updateRole,
    updateUser
  };
};
