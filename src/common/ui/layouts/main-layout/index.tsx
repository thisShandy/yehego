import type { FC, PropsWithChildren } from "react";

import HeaderSection from "~/common/ui/sections/header-section";

import light from "./styles/light.module.scss";

interface IMainLayout {
  background?: boolean;
  header?: boolean;
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ({
  children, background = false, header = true
}) => {
  return (
    <div
      className={`${light.mainWrapper} ${background && light.mainBackground}`}
    >
      {header && (
        <HeaderSection />
      )}
      {children}
    </div>
  );
};

export default MainLayout;
