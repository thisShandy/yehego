import type { FC, PropsWithChildren } from "react";

import light from "./styles/light.module.scss";

interface IButtonUi {
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  onClick: () => void;
}

const ButtonUi: FC<PropsWithChildren<IButtonUi>> = ({ children, loading, disabled, label, onClick }) => {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className={light.buttonContainer}>
      {label && !loading && <span className={light.buttonTitle}>{label}</span>}
      {loading && <span className={light.buttonTitle}>Loading...</span>}
      {children}
    </button>
  );
};

export default ButtonUi;
