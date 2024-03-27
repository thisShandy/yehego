import type { IUserList } from "~/modules/settings-module/lib/types/user-list.type.ts";
import type { IMeta } from "~/common/lib/types/system/meta.type.ts";

import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import api from "~/modules/settings-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

export const useCompanyUsers = () => {
  const user = useRecoilValue(userState);

  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<IUserList[]>([]);
  const [meta, setMeta] = useState<null | IMeta>(null);

  useEffect(() => {
    (async () => {
      if (user) {
        setLoading(true);
        try {
          const { data } = await api.company.getUsers(page, user.company.uuid);

          setList(data.data);
          setMeta(data.meta);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [user, page]);

  const handlePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return {
    loading,
    list,
    meta,
    page,
    handlePage
  };
};
