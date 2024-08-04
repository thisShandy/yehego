export const GET_USERS__PATH = "/v1/users";

export const CREATE_OFFICE__PATH = "/company/office";
export const REMOVE_OFFICE__PATH = (officeId: string) => `/company/office/${officeId}`;

export const CREATE_DEPARTMENT__PATH = "/company/department";
export const REMOVE_DEPARTMENT__PATH = (departmentId: string) => `/company/department/${departmentId}`;
export const PROVIDER__PATH = (companyId: string) => `/company/${companyId}/corporate-contracts`;
export const REMOVE_PROVIDER__PATH = (companyId: string, contractId: string) =>
  `/company/${companyId}/corporate-contracts/${contractId}`;

export const INVITE_USER__PATH = (companyId: string) => `/companies/${companyId}/users/invitations`;
export const EXCEL_USER__PATH = (companyId: string) => `/companies/${companyId}/users/batch-invitations`;
export const MANUAL_USER__PATH = (companyId: string) => `/companies/${companyId}/users`;
