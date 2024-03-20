import type { IUser } from "~/common/lib/types/user/user.type.ts";

import Axios from "~/core/axios";
import { USER_UUID__PATH } from "~/common/model/api/company/path.ts";

export const getUserById = (userId: string) => {
  return Axios.get<IUser>(`${USER_UUID__PATH}/${userId}`);
};
