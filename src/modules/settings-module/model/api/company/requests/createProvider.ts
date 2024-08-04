import type { IProviderPayload } from "~/modules/settings-module/lib/types/provider-payload.type.ts";

import Axios from "~/core/axios";
import { PROVIDER__PATH } from "~/modules/settings-module/model/api/company/path.ts";

export const createProvider = (companyId: string, payload: IProviderPayload) => {
  return Axios.post(PROVIDER__PATH(companyId), payload);
};
