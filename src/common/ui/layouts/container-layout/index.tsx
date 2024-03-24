import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

const ContainerLayout: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <div className={light.containerWrapper}>
      <div className={`container ${light.container}`}>
        {children}
      </div>
    </div>
  );
};

export default ContainerLayout;
