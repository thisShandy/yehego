import type { IUser } from "~/common/lib/types/user/user.type.ts";

import { atom } from "recoil";

export const userState = atom<null | IUser>({
  key: "userState",
  default: null
});
