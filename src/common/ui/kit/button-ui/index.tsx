import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

interface IButtonUi {
  label?: string;
  onClick: () => void;
}

const ButtonUi: FC<PropsWithChildren<IButtonUi>> = ({ children, label, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={light.buttonContainer}>
      {label && <span className={light.buttonTitle}>{label}</span>}
      {children}
    </button>
  );
};

export default ButtonUi;
