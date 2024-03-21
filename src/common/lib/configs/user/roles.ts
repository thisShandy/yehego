import type { IDropdownOption } from "~/common/lib/types/form/dropdown-option.type.ts";

export const roles: IDropdownOption[] = [
  {
    key: "company_guest",
    value: "Guest",
  },
  {
    key: "company_user",
    value: "Company user",
  },
  {
    key: "company_admin",
    value: "Company admin",
  }
];
