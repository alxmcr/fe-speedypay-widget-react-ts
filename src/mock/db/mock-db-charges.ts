import { LoadingStates } from '../../helpers/constants/constants-services';
import { DbCharge } from '../../types/databaseTypes';
import { dbCheckout001, dbCheckout002 } from './mock-db-checkouts';
import { dbCustomer001, dbCustomer002, dbCustomer003 } from './mock-db-customers';
import { DbBankTransferSample, DbCashSample, DbCreditCardSample } from './mock-db-payment-methods';

export const CHARGES_ID = {
  id001: 'cha-898ewq312fasf321',
  id002: 'cha-323jk2h3jk12h3kh',
  id003: 'cha-78894123jk12j332',
  id004: 'cha-98jk45j6k45j6k4j',
};

export const dbCharge001: DbCharge = {
  cha_charge: CHARGES_ID.id001,
  cha_payment_method: DbCashSample,
  cha_customer: dbCustomer001,
  cha_expiration_date: 1703396554825,
  cha_checkout: dbCheckout001,
  cha_reference_number: '4798173897297389',
  cha_status: LoadingStates.PENDING,
};

export const dbCharge002: DbCharge = {
  cha_charge: CHARGES_ID.id002,
  cha_payment_method: DbCreditCardSample,
  cha_customer: dbCustomer002,
  cha_expiration_date: 1703396554825,
  cha_checkout: dbCheckout001,
  cha_reference_number: '983432432574383',
  cha_status: LoadingStates.SUCCESS,
};

export const dbCharge003: DbCharge = {
  cha_charge: CHARGES_ID.id003,
  cha_payment_method: DbBankTransferSample,
  cha_customer: dbCustomer003,
  cha_expiration_date: 1703396554825,
  cha_checkout: dbCheckout001,
  cha_reference_number: '123245434535454',
  cha_status: LoadingStates.PENDING,
};

export const dbCharge004: DbCharge = {
  cha_charge: CHARGES_ID.id004,
  cha_payment_method: DbCashSample,
  cha_customer: dbCustomer001,
  cha_expiration_date: 1703396554825,
  cha_checkout: dbCheckout002,
  cha_reference_number: '8743543534574587',
  cha_status: LoadingStates.SUCCESS,
};
