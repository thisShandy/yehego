import { getCompanyCards } from "~/common/model/api/card/requests/getCompanyCards.ts";
import { createCompanyCard } from "~/common/model/api/card/requests/createCompanyCard.ts";
import {deleteCompanyCard} from "~/common/model/api/card/requests/deleteCompanyCard.ts";

export const card = {
  getCompanyCards,
  createCompanyCard,
  deleteCompanyCard
};
