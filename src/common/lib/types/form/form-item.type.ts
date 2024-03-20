import type { IDropdownOption } from "~/common/lib/types/form/dropdown-option.type.ts";

export interface IFormItem {
  required?: boolean;
  group: string | null;
  name: string;
  type: "dropdown" | "text" | "email" | "phone";
  label: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  config?: IDropdownOption[];
}
