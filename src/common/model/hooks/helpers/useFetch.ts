import { useEffect, useState } from "react";

import Axios from "~/core/axios";

interface IUseFetch<T> {
  data: T;
  loading: boolean;
  error: null | string;
}

export const useFetch = <T>(url: string, initial: any, dependencies: any[] = []): IUseFetch<T> => {
  const [data, setData] = useState<T>(initial as T);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const handleRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await Axios.get<T>(url);
      setData(data);
    } catch (e) {
      // @ts-ignore
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await handleRequest();
    })();
  }, [...dependencies]);

  return {
    data,
    loading,
    error
  };
};
