import { DbOrder } from '../../types/databaseTypes';
import { dbCheckout001, dbCheckout002 } from './mock-db-checkouts';
import { dbCustomer001, dbCustomer002 } from './mock-db-customers';
import {
  DbBankTransferSample,
  DbCashSample,
  DbCreditCardSample,
} from './mock-db-payment-methods';

export const ORDERS_ID = {
  id001: 'ord-898ewq312fasf321',
  id002: 'ord-323jk2h3jk12h3kh',
  id003: 'ord-78894123jk12j332',
  id004: 'ord-98jk45j6k45j6k4j',
};

export const dbOrder001: DbOrder = {
  or_order: ORDERS_ID.id001,
  or_payment_method: DbCashSample,
  or_customer: dbCustomer001,
  or_expiration_date: 1671816214,
  or_checkout: dbCheckout001,
  or_reference_number: '4798173897297389',
  or_status: 'Pending',
};

export const dbOrder002: DbOrder = {
  or_order: ORDERS_ID.id002,
  or_payment_method: DbCreditCardSample,
  or_customer: dbCustomer001,
  or_expiration_date: 1669224214,
  or_checkout: dbCheckout001,
  or_reference_number: '983432432574383',
  or_status: 'Pending',
};

export const dbOrder003: DbOrder = {
  or_order: ORDERS_ID.id003,
  or_payment_method: DbBankTransferSample,
  or_customer: dbCustomer002,
  or_expiration_date: 1642958614,
  or_checkout: dbCheckout001,
  or_reference_number: '123245434535454',
  or_status: 'Pending',
};

export const dbOrder004: DbOrder = {
  or_order: ORDERS_ID.id004,
  or_payment_method: DbCashSample,
  or_customer: dbCustomer001,
  or_expiration_date: 1703352270,
  or_checkout: dbCheckout002,
  or_reference_number: '8743543534574587',
  or_status: 'Pending',
};
