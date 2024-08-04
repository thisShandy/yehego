import type { FC, PropsWithChildren, ChangeEvent } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";

import light from "./style/light.module.scss";

export interface IInputUi extends ITest {
  testId?: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  error?: null | string;
  disabled?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputUi: FC<PropsWithChildren<IInputUi>> = ({
  children,
  testId = "",
  type,
  name,
  placeholder = "",
  value,
  error,
  disabled,
  handleChange
}) => {
  return (
    <div className={`${light.inputContainer} ${error && light.error} ${disabled && light.disabled}`}>
      <div className={light.inputContent}>
        <span className={light.contentTitle}>{error || name}</span>
        <input
          data-testid={testId}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={light.contentField}
        />
      </div>
      {children}
    </div>
  );
};

export default InputUi;
