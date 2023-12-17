import { DbCheckout } from '../../types/serviceTypes';
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

export const dbCheckout001: DbCheckout = {
  ch_checkout: 'checkout-001',
  ch_company: dbCompanyBetsson,
  ch_amount_to_pay: 1265.89,
  ch_currency_amount: '$',
  ch_payment_methods: [DbCreditCardSample, DbBankTransferSample, DbCashSample],
};

export const dbCheckout002: DbCheckout = {
  ch_checkout: 'checkout-002',
  ch_company: dbCompanyFinberry,
  ch_amount_to_pay: 787.36,
  ch_currency_amount: 'MXN',
  ch_payment_methods: [DbCreditCardSample, DbCashSample],
};

export const dbCheckout003: DbCheckout = {
  ch_checkout: 'checkout-003',
  ch_company: dbFittersOriginal,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [DbCashSample],
};
