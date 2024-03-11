import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

const SideLayout: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <div className={light.sideContainer}>
      {children}
    </div>
  );
};

export default SideLayout;
