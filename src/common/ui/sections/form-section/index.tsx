import type { FC } from "react";
import type { IFormItem } from "~/common/lib/types/form/form-item.type.ts";

import { useForm } from "~/common/model/hooks/form/useForm.tsx";

import { splitFormByGroup } from "~/common/lib/helpers/form/split-form-by-group.ts";

import InputUi from "~/common/ui/kit/input-ui";
import PhoneUi from "~/common/ui/kit/phone-ui";
import DropdownUi from "~/common/ui/kit/dropdown-ui";
import ButtonUi from "~/common/ui/kit/button-ui";

import light from "./styles/light.module.scss";

interface IFormSection {
  formName: string;
  formConfig: IFormItem[];
  submitLabel: string;
  submit: (data: any) => any;
  message?: string;
}

const FormSection: FC<IFormSection> = ({ formName, formConfig, submitLabel, submit, message }) => {
  const { loading, values, errors, globalError, handleUpdate, handleSubmit } = useForm(formConfig, submit, message);

  return (
    <div className={`container ${light.formWrapper}`}>
      <div className={light.formContainer}>
        <span className={light.formTitle}>{formName}</span>
        <div className={light.formContent}>
          {splitFormByGroup(formConfig).map((form) => {
            return (
              <div key={form[0].group} className={light.formGroup}>
                {form[0].group && <span className={light.groupTitle}>{form[0].group}</span>}
                <div className={light.groupContent}>
                  {form.map((item) => {
                    if (item.type === "dropdown") {
                      return (
                        <DropdownUi
                          key={item.name}
                          name={`${item.label}${item.required ? "*" : ""}`}
                          value={values[item.name]}
                          error={errors[item.name]}
                          placeholder={item.placeholder}
                          config={item.config!}
                          handleChange={(value) => handleUpdate(item.name, value)}
                        />
                      );
                    }

                    if (item.type === "phone") {
                      return (
                        <PhoneUi
                          key={item.name}
                          name={`${item.label}${item.required ? "*" : ""}`}
                          placeholder={item.placeholder}
                          value={values[item.name]}
                          error={errors[item.name]}
                          handleChange={(phone) => handleUpdate(item.name, phone)}
                        />
                      );
                    }

                    return !item.confirm ? (
                      <InputUi
                        key={item.name}
                        type={item.type}
                        disabled={item.disabled}
                        name={`${item.label}${item.required ? "*" : ""}`}
                        placeholder={item.placeholder}
                        value={values[item.name]}
                        error={errors[item.name]}
                        handleChange={(e) => {
                          const value = e.target.value;
                          handleUpdate(item.name, value);
                        }}
                      />
                    ) : (
                      <div className={light.inputConfirm}>
                        <InputUi
                          key={item.name}
                          type={item.type}
                          disabled={item.disabled || values[item.confirm!.name] === "true"}
                          name={`${item.label}${item.required ? "*" : ""}`}
                          placeholder={item.placeholder}
                          value={values[item.name]}
                          error={errors[item.name]}
                          handleChange={(e) => {
                            const value = e.target.value;
                            handleUpdate(item.name, value);
                          }}
                        />
                        <button
                          type="button"
                          className={light.confirmCheckbox}
                          onClick={() => {
                            if (values[item.confirm!.name] === "true") {
                              handleUpdate(item.confirm!.name, "false");
                              handleUpdate(item.name, "");
                            } else {
                              handleUpdate(item.confirm!.name, "true");
                              handleUpdate(item.name, "");
                            }
                          }}
                        >
                          <div className={light.checkboxCheck}>
                            {values[item.confirm.name] === "true" && <div className={light.checkActive} />}
                          </div>
                          <span className={light.checkboxTitle}>{item.confirm.label}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={light.formSubmit}>
          {globalError && <span className={light.submitError}>{globalError}</span>}
          <ButtonUi loading={loading} label={submitLabel} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
