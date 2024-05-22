import type { ICompany } from "~/common/lib/types/company/company.type.ts";

export interface IUser {
  firstname: string;
  lastname: string;
  date_of_birth: string;
  sex: string;
  uniq_id: string;
  phone: string;
  email: string;
  role: string;
  office_id: string;
  department_id: string;
  status: string;
  company: ICompany;
  office: {
    id: number;
    name: string;
  },
  department: {
    id: number;
    name: string;
  },
  address: {
    city: null | string;
    country: null | string;
    postcode: null | string;
    street: null | string;
    street2: null | string;
  };
}
