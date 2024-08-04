import { useState, useLayoutEffect } from "react";

import { tripApi } from "~/modules/trip-module/model/api";

export const useTripResults = (
  outwardCity: string,
  inwardCity: string,
  outwardDate: string,
  inwardDate: string,
  passengers: string
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({
    outward: {
      offers: [] as any[]
    },
    inward: {
      offers: [] as any[]
    }
  });
  const [meta, setMeta] = useState({
    page: {
      offset: 0,
      length: 20
    },
    sorting: "emission",
    sorting_type: "asc"
  });

  const getTripResults = async () => {
    setLoading(true);

    try {
      const querySearch = `from=${outwardCity}&to=${inwardCity}&outward_date=${outwardDate}&inward_date=${inwardDate}&passengersCount=${passengers.split(",").length}`;
      const queryMeta = `page[offset]=${meta.page.offset}&page[length]=${meta.page.length}&sorting=${meta.sorting}&sorting_type=${meta.sorting_type}`;

      const { data } = await tripApi.search.getSearchResults(`${querySearch}&${queryMeta}`);

      console.log("results", data);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    (async () => {
      await getTripResults();
    })();
  }, []);

  return {
    data,
    loading,
    setMeta
  };
};
