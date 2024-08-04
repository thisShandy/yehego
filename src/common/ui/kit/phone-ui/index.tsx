import type { FC } from "react";
import type { ITest } from "~/common/lib/types/test.type.ts";

import PhoneInput from "react-phone-input-2";

import light from "./styles/light.module.scss";
import "react-phone-input-2/lib/style.css";
import "./styles/phone.css";

export interface IPhoneUi extends ITest {
  testId?: string;
  name: string;
  placeholder?: string;
  value: string;
  error?: null | string;
  handleChange: (phone: string) => void;
}

const PhoneUi: FC<IPhoneUi> = ({ testId = "", name, placeholder = "", value, error, handleChange }) => {
  return (
    <div className={`${light.phoneContainer} ${error && light.error}`}>
      <span className={light.phoneTitle}>{error || name}</span>
      <PhoneInput data-testid={testId} country={"se"} value={value} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default PhoneUi;
