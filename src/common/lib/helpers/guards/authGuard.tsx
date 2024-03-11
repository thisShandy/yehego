import type { ReactNode } from "react";

import { Navigate } from "react-router-dom";

export const authGuard = (Component: () => ReactNode) => {
  const Page = (props: any) => {
    const token = localStorage.getItem("@accessToken");

    if (token) return <Component {...props} />;
    else return <Navigate to="/login" />;
  };

  return Page;
};
