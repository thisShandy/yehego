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
}
