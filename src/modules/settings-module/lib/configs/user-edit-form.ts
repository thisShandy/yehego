import type { IFormItem } from "~/common/lib/types/form/form-item.type.ts";

import { genders } from "~/common/lib/configs/user/genders.ts";

export const userEditForm: IFormItem[] = [
  {
    required: true,
    group: "Main information",
    type: "text",
    name: "firstname",
    label: "First name (as in passport)",
    placeholder: "John",
    value: ""
  },
  {
    required: true,
    group: "Main information",
    type: "text",
    name: "lastname",
    label: "Last name",
    placeholder: "Doe",
    value: ""
  },
  {
    required: true,
    group: "Main information",
    type: "text",
    name: "middle_name",
    label: "Middle name (as in passport)",
    placeholder: "Andrew Tony",
    value: "",
    confirm: {
      name: "not_have_middle_name",
      label: "I don't have middle name",
      value: false
    }
  },
  {
    required: false,
    group: "Contact information",
    type: "text",
    name: "uniq_id",
    label: "User ID",
    placeholder: "user_id",
    value: ""
  },
  {
    required: true,
    group: "Main information",
    type: "text",
    name: "date_of_birth",
    label: "Date of birth",
    placeholder: "31-02-1990",
    value: ""
  },
  {
    required: true,
    group: "Main information",
    type: "dropdown",
    name: "sex",
    label: "Gender",
    placeholder: "Male",
    config: genders,
    value: ""
  },
  {
    required: true,
    group: "Contact information",
    type: "phone",
    name: "phone",
    label: "Phone",
    placeholder: "+46 123-4567-890",
    value: ""
  },
  {
    required: true,
    group: "Contact information",
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "user@mail.com",
    value: ""
  },
  {
    required: true,
    group: "Company information",
    type: "dropdown",
    name: "office_id",
    label: "Office name",
    placeholder: "Office 1",
    config: [],
    value: ""
  },
  {
    required: true,
    group: "Company information",
    type: "dropdown",
    name: "department_id",
    label: "Department name",
    placeholder: "Department 1",
    config: [],
    value: ""
  }
];
