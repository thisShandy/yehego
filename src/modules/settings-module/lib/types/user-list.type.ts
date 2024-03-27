import type { IUser } from "~/common/lib/types/user/user.type.ts";

export interface IUserList {
  id: string;
  type: string;
  attributes: IUser;
}
