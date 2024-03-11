import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

const AuthLayout: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <div className={light.authWrapper}>
      {children}
    </div>
  );
};

export default AuthLayout;
