import { DbCustomer } from '../../types/databaseTypes';

export const CUSTOMERS_ID = {
  id001: 'customer-001',
  id002: 'customer-002',
  id003: 'customer-003',
  id004: 'customer-004',
};

export const dbCustomer001: DbCustomer = {
  cu_customer: CUSTOMERS_ID.id001,
  cu_fullname: 'Trinity Rodman',
  cu_email: 'trinity@mail.com',
};

export const dbCustomer002: DbCustomer = {
  cu_customer: CUSTOMERS_ID.id002,
  cu_fullname: 'Sophia Smith',
  cu_email: 'sophia@mail.com',
};

export const dbCustomer003: DbCustomer = {
  cu_customer: CUSTOMERS_ID.id003,
  cu_fullname: 'Ashley Hatch',
  cu_email: 'ashley@mail.com',
};
