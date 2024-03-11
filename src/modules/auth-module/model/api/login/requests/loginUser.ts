import type { ILoginPayload } from "~/modules/auth-module/lib/types/login-payload.type.ts";

import Axios from "~/core/axios";
import { LOGIN__PATH } from "~/modules/auth-module/model/api/login/paths.ts";

export const loginUser = (data: ILoginPayload) => {
  return Axios.post(LOGIN__PATH, data);
};
