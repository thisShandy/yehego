export interface ILoyaltyCard {
  id: string;
  type: string;
  attributes: {
    number: string;
    loyalty: {
      name: string;
      airline_name: string;
    }
  }
}
