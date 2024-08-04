import type { IFormItem } from "~/common/lib/types/form/form-item.type.ts";

import { currency } from "~/common/lib/configs/system/currency.ts";
import { language } from "~/common/lib/configs/system/language.ts";
import { time } from "~/common/lib/configs/system/time.ts";

export const companyEditForm: IFormItem[] = [
  {
    required: true,
    group: "Contacts",
    type: "text",
    name: "name",
    label: "Company name",
    placeholder: "John's and Brothers",
    value: ""
  },
  {
    required: true,
    group: "Contacts",
    type: "text",
    name: "tax_id",
    label: "Org-no",
    placeholder: "DO00T00000000000000000000000",
    value: ""
  },
  {
    required: true,
    group: "Contacts",
    type: "text",
    name: "contact_person",
    label: "Contact person",
    placeholder: "John Doe",
    value: ""
  },
  {
    required: true,
    group: "Contacts",
    type: "phone",
    name: "contact_phone",
    label: "Contact phone",
    placeholder: "+46 123-4567-890",
    value: ""
  },
  {
    required: true,
    group: "Contacts",
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "contact@company.com",
    value: ""
  },
  {
    required: true,
    group: "Address",
    type: "text",
    name: "street",
    label: "Street",
    placeholder: "Lizeth Orchard",
    value: ""
  },
  {
    required: true,
    group: "Address",
    type: "text",
    name: "postcode",
    label: "Zip Code",
    placeholder: "31865",
    value: ""
  },
  {
    required: true,
    group: "Address",
    type: "text",
    name: "city",
    label: "City",
    placeholder: "Stockholm",
    value: ""
  },
  {
    required: true,
    group: "Address",
    type: "text",
    name: "country",
    label: "Country",
    placeholder: "Sweden",
    value: ""
  },
  {
    required: true,
    group: "Additional Info",
    type: "dropdown",
    name: "currency",
    label: "Currency",
    placeholder: "EUR",
    config: currency,
    value: ""
  },
  {
    required: true,
    group: "Additional Info",
    type: "dropdown",
    name: "language",
    label: "Language",
    placeholder: "English",
    config: language,
    value: ""
  },
  {
    required: true,
    group: "Additional Info",
    type: "dropdown",
    name: "time_format",
    label: "Time Format",
    placeholder: "24h",
    config: time,
    value: ""
  }
];
