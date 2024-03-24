import type { FC, ChangeEvent } from "react";

import { PatternFormat } from "react-number-format";

import light from "./styles/light.module.scss";

interface IInputFormatUi {
  value: string;
  format: string;
  mask: string;
  error?: null | string;
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputFormatUi: FC<IInputFormatUi> = ({
  value, format, mask, error, placeholder = "", handleChange
}) => {
  return (
    <div className={`${light.inputContainer} ${error && light.error}`}>
      <span className={light.inputName}>
        {error || placeholder}
      </span>
      <PatternFormat
        value={value}
        format={format}
        allowEmptyFormatting
        mask={mask}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFormatUi;
