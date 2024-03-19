import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import api from "~/common/model/api";

import { userState } from "~/common/model/recoil/user";

const useInit = () => {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.user.getUser();
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
};

export default useInit;
