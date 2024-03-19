import type { IOffice } from "~/common/lib/types/company/office.type.ts";

import Axios from "~/core/axios";
import { OFFICES__PATH } from "~/common/model/api/company/path.ts";

export const getOffices = () => {
  return Axios.get<IOffice[]>(OFFICES__PATH);
};
