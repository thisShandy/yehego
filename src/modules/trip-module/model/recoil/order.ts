import { atom } from "recoil";

export const orderState = atom<null | any[]>({
  key: "orderState",
  default: null
});
