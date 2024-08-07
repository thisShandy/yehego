import type { FC, CSSProperties, PropsWithChildren } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";

import light from "./styles/light.module.scss";

interface IButtonUi extends ITest {
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  size?: "big" | "medium" | "small";
  style?: CSSProperties;
  onClick: () => void;
}

const ButtonUi: FC<PropsWithChildren<IButtonUi>> = ({
  children,
  testId,
  loading,
  disabled,
  label,
  size = "big",
  style,
  onClick
}) => {
  return (
    <button
      type="button"
      data-testid={testId}
      disabled={disabled}
      onClick={onClick}
      className={`${light.buttonContainer} ${light[size]}`}
      style={style}
    >
      {label && !loading && <span className={light.buttonTitle}>{label}</span>}
      {loading && <span className={light.buttonTitle}>Loading...</span>}
      {children}
    </button>
  );
};

export default ButtonUi;
