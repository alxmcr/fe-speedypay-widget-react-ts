import { DbCheckout } from '../../types/databaseTypes';
import {
  dbCompanyBetsson,
  dbCompanyFinberry,
  dbFittersOriginal,
} from './mock-db-companies';
import {
  DbBankTransferSample,
  DbCashSample,
  DbCreditCardSample,
} from './mock-db-payment-methods';

export const CHECKOUTS_ID = {
  id001: 'checkout-001',
  id002: 'checkout-002',
  id003: 'checkout-003',
};

export const dbCheckout001: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.id001,
  ch_company: dbCompanyBetsson,
  ch_amount_to_pay: 1265.89,
  ch_currency_amount: '$',
  ch_payment_methods: [DbCreditCardSample, DbBankTransferSample, DbCashSample],
};

export const dbCheckout002: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.id002,
  ch_company: dbCompanyFinberry,
  ch_amount_to_pay: 787.36,
  ch_currency_amount: 'MXN',
  ch_payment_methods: [DbCashSample, DbCreditCardSample],
};

export const dbCheckout003: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.id003,
  ch_company: dbFittersOriginal,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [DbBankTransferSample, DbCashSample, DbCreditCardSample],
};
