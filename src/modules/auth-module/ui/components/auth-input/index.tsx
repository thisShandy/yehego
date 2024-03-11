import type { FC, PropsWithChildren, ChangeEvent } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";

import light from "./style/light.module.scss";

interface IAuthInput extends ITest {
  testId?: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const AuthInput: FC<PropsWithChildren<IAuthInput>> = ({
  children,
  testId = "",
  type,
  name,
  placeholder,
  value,
  handleChange,
  error = false
}) => {
  return (
    <div className={`${light.inputContainer} ${error && light.error}`}>
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

export default AuthInput;
