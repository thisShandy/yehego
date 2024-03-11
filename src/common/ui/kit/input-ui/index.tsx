import type { FC, PropsWithChildren, ChangeEvent } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";

import light from "./style/light.module.scss";

interface IInputUi extends ITest {
  testId?: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputUi: FC<PropsWithChildren<IInputUi>> = ({
  children,
  testId = "",
  type,
  name,
  placeholder,
  value,
  handleChange
}) => {
  return (
    <div className={light.inputContainer}>
      <div className={light.inputContent}>
        <span className={light.contentTitle}>{name}</span>
        <input
          data-testid={testId}
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
