import Axios from "~/core/axios";

import { CREATE_OFFICE__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const createOffice = (name: string) => {
  return Axios.post(CREATE_OFFICE__PATH, { name });
};
