import type { FC } from "react";

import { PatternFormat } from "react-number-format";

import { cardTypes } from "~/common/lib/configs/system/card-types.ts";

import InputUi from "~/common/ui/kit/input-ui";
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
      <div className={`${light.cardInput} ${errors.number && light.error}`}>
        <span className={light.inputName}>
          {errors.number || "Card number"}
        </span>
        <PatternFormat
          value={form.number}
          format="#### #### #### ####"
          allowEmptyFormatting
          mask="X"
          onChange={(event) => {
            const value = event.target.value;
            handleUpdate("number", value);
          }}
        />
      </div>
      <div className={`${light.cardInput} ${errors.expiration && light.error}`}>
        <span className={light.inputName}>
          {errors.expiration || "Expiration date"}
        </span>
        <PatternFormat
          value={form.expiration}
          format="##/##"
          allowEmptyFormatting
          mask="X"
          onChange={(event) => {
            const value = event.target.value;
            handleUpdate("expiration", value);
          }}
        />
      </div>
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
