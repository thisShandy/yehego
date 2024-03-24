import type { FC } from "react";

import { cardTypes } from "~/common/lib/configs/system/card-types.ts";

import InputUi from "~/common/ui/kit/input-ui";
import InputFormatUi from "~/common/ui/kit/input-format-ui";
import DropdownUi from "~/common/ui/kit/dropdown-ui";

import light from "./styles/light.module.scss";

interface ICardFormSection {
  form: {
    number: string;
    type: string;
    expiration: string;
    cardholder: string;
  },
  errors: {
    number: null | string;
    type: null | string;
    expiration: null | string;
    cardholder: null | string;
    name: null | string;
    lastName: null | string;
  },
  handleUpdate: (key: string, value: string) => void;
}

const CardFormSection: FC<ICardFormSection> = ({
  form, errors, handleUpdate
}) => {
  return (
    <div className={light.cardForm}>
      <InputFormatUi
        value={form.number}
        format="#### #### #### ####"
        mask="X"
        error={errors.number}
        placeholder="Card number"
        handleChange={(event) => {
          const value = event.target.value;
          handleUpdate("number", value);
        }}
      />
      <InputFormatUi
        value={form.expiration}
        format="##/##"
        mask="X"
        error={errors.expiration}
        placeholder="Expiration date"
        handleChange={(event) => {
          const value = event.target.value;
          handleUpdate("expiration", value);
        }}
      />
      <InputUi
        type="text"
        name="Cardholder"
        value={form.cardholder}
        error={errors.cardholder || errors.name || errors.lastName}
        placeholder="JOHN DOE"
        handleChange={(event) => {
          const value = event.target.value;
          handleUpdate("cardholder", value);
        }}
      />
      <DropdownUi
        name="Card type"
        value={form.type}
        config={cardTypes}
        error={errors.type}
        placeholder="Visa"
        handleChange={(value) => {
          handleUpdate("type", value);
        }}
      />
    </div>
  );
};

export default CardFormSection;
