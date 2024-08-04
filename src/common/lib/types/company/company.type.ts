export interface ICompany {
  uuid: string;
  name: string;
  email: string;
  language: string;
  contact_person: string;
  contact_phone: string;
  currency: string;
  customer_number: string;
  tax_id: string;
  time_format: string;
  umbrella_id: string;
  address: {
    city: string;
    country: string;
    postcode: string;
    street: string;
    street2: string;
  };
}
