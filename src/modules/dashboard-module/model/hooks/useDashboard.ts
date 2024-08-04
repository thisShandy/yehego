import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { apiDashboard } from "~/modules/dashboard-module/model/api";

import { userState } from "~/common/model/recoil/user.ts";

export const useDashboard = () => {
  const user = useRecoilValue(userState);
  const [loading, setLoading] = useState<boolean>(false);

  const [sort, setSort] = useState<string>("year_to_date");
  const [type, setType] = useState<string>("user");

  const [dashboardData, setDashboardData] = useState({
    green: null as null | any,
    amount: {
      air: 0,
      bus: 0,
      train: 0
    },
    chart: {
      q0: 0,
      q1: 0,
      q2: 0,
      q3: 0
    }
  });

  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      try {
        const id = type === "company" ? user.company.uuid : type === "department" ? user.department_id : user.uuid;
        const { data: greenData } = await apiDashboard.dashboard.getGreenChose(id, type, sort);
        const { data: amountData } = await apiDashboard.dashboard.getTripAmounts(id, type, sort);
        const { data: cartData } = await apiDashboard.dashboard.getCoChart(id, type);

        setDashboardData({
          green: (Number(greenData) / 1000).toFixed(1),
          amount: amountData,
          chart: cartData
        });
      } catch (e) {

      } finally {
        setLoading(false);
      }
    })();
  }, [user, type]);

  const handleSort = (value: string) => {
    setSort(value);
  };

  const handleType = (value: string) => {
    setType(value);
  };

  return {
    loading,
    sort,
    handleSort,
    type,
    handleType,
    dashboardData
  };
};
