import { validateToken } from "~/modules/auth-module/model/api/invite/requests/validateToken.ts";
import { consumeInvitation } from "~/modules/auth-module/model/api/invite/requests/consumeInvitation.ts";

export const invite = {
  validateToken,
  consumeInvitation
};
