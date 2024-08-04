import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import api from "~/common/model/api";

import { userState } from "~/common/model/recoil/user.ts";

import { companyEditForm } from "~/modules/settings-module/lib/configs/company-edit-form.ts";

export const useCompanyEdit = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState<boolean>(true);
  const [companyConfig, setCompanyConfig] = useState(companyEditForm);

  useEffect(() => {
    (async () => {
      if (user) {
        try {
          setCompanyConfig((prev) =>
            prev.map((item) => {
              const newItem = item;

              if (item.group === "Address") {
                // @ts-ignore
                newItem.value =
                  user.company.address[item.name] === null ? "" : user.company.address[item.name].toString();
              } else {
                // @ts-ignore
                newItem.value = user.company[item.name] === null ? "" : user.company[item.name].toString();
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

  const getUser = async () => {
    const { data: userData } = await api.user.getUser();
    setUser(userData);
  };

  const handleUpdate = async (data: any) => {
    const payload = {
      ...data,
      address: {
        street: data.street,
        city: data.city,
        postcode: data.postcode,
        country: data.country
      }
    };
    await api.company.updateCompany(user!.company.uuid, payload);
    await getUser();
  };

  return {
    loading,
    companyConfig,
    handleUpdate
  };
};
