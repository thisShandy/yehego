import type { IDropdownOption } from "~/common/lib/types/form/dropdown-option.type.ts";

export const cardTypes: IDropdownOption[] = [
  { key: "VI", value: "Visa" },
  { key: "CA", value: "Mastercard" },
  { key: "DC", value: "Diners" },
  { key: "AX", value: "American Express" },
  // { key: "DS", value: "Discover" },
  // { key: "TP", value: "Air Plus" },
];
