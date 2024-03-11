import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

interface ISsoButton {
  icon: any;
  label: string;
  onClick: () => void;
}

const SsoButton: FC<PropsWithChildren<ISsoButton>> = ({
  icon, label, onClick
}) => {
  return (
    <button
      type="button"
      className={light.ssoContainer}
      onClick={onClick}
    >
      <img className={light.ssoIcon} src={icon} alt="image" />
      <span className={light.ssoTitle}>
        {label}
      </span>
    </button>
  );
};

export default SsoButton;
