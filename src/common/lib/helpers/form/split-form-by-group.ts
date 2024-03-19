import type { IFormItem } from "~/common/lib/types/form/form-item.type.ts";

export const splitFormByGroup = (form: IFormItem[]): IFormItem[][] => {
  const splitedForm = form.reduce((result, obj) => {
    // @ts-ignore
    (result[obj.group] = result[obj.group] || []).push(obj);
    return result;
  }, {});

  return Object.values(splitedForm);
};
