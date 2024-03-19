import type { IDepartment } from "~/common/lib/types/company/department.type.ts";

import Axios from "~/core/axios";
import { DEPARTMENTS__PATH } from "~/common/model/api/company/path.ts";

export const getDepartments = () => {
  return Axios.get<IDepartment[]>(DEPARTMENTS__PATH);
};
