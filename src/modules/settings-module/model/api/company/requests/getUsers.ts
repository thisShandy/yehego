import type { IMeta } from "~/common/lib/types/system/meta.type.ts";
import type { IUserList } from "~/modules/settings-module/lib/types/user-list.type.ts";

import Axios from "~/core/axios";
import { GET_USERS__PATH } from "~/modules/settings-module/model/api/company/path.ts";

// https://api-staging.yehego.com/api/v1/users?page[number]=1&page[size]=10&filter-item[company]=589f1b34-8e60-4abf-a38e-064e179264ed

export const getUsers = (page: number, companyId: string) => {
  return Axios.get<{
    data: IUserList[];
    meta: IMeta;
  }>(`${GET_USERS__PATH}?page[number]=${page}&page[size]=10&filter[company]=${companyId}`);
};
