import type { IFormItem } from "~/common/lib/types/form/form-item.type.ts";

import { roles } from "~/common/lib/configs/user/roles.ts";

export const roleEditForm: IFormItem[] = [
  {
    required: true,
    group: null,
    type: "dropdown",
    name: "role",
    label: "Role",
    placeholder: "Guest",
    config: roles,
    value: ""
  }
];
