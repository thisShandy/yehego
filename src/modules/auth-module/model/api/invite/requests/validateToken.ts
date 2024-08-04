import Axios from "~/core/axios";
import { VALIDATE_TOKEN__PATH } from "~/modules/auth-module/model/api/invite/path.ts";

export const validateToken = (token: string) => {
  return Axios.post(VALIDATE_TOKEN__PATH, { token });
};
