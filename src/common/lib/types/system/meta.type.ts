export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    active: boolean;
    label: string;
    url: null | string;
  }[];
  page: {
    "current-page": number;
    "from": number;
    "last-page": number;
    "per-page": number;
    "to": number;
    "total": number;
  };
  path: string;
  per_page: number;
  to: number;
  total: number;
}
