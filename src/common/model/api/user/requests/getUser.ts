import type { IUser } from "~/common/lib/types/user/user.type.ts";

import Axios from "~/core/axios";
import { USER__PATH } from "~/common/model/api/user/path.ts";

export const getUser = () => {
  return Axios.post<IUser>(USER__PATH, null);
};
