import { DbCheckout } from '../../types/databaseTypes';
import {
  dbDefaultCompany,
  dbFittersOriginal
} from './mock-db-companies';
import {
  dbNineMonths,
  dbOnePayment,
  dbSixMonths,
  dbThreeMonths,
  twelveMonths,
} from './mock-db-installments';
import {
  DbBankTransferSample,
  DbCashSample,
  DbCreditCardSample,
} from './mock-db-payment-methods';

export const CHECKOUTS_ID = {
  empty: 'empty',
  emptyPaymentMethods: 'empty-payment-methods',
  emptyInstallments: 'empty-installments',
  id001: 'checkout-001',
  id002: 'checkout-002',
  id003: 'checkout-003',
};

export const dbCheckoutEmpty: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.empty,
  ch_company: dbDefaultCompany,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [],
  ch_installments: [],
};

export const dbCheckoutNoPaymentMethods: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.emptyPaymentMethods,
  ch_company: dbFittersOriginal,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [],
  ch_installments: [],
};

export const dbCheckoutNoInstallments: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.emptyInstallments,
  ch_company: dbDefaultCompany,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [DbCreditCardSample, DbBankTransferSample, DbCashSample],
  ch_installments: [],
};

export const dbCheckout001: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.id001,
  ch_company: dbDefaultCompany,
  ch_amount_to_pay: 1265.89,
  ch_currency_amount: '$',
  ch_payment_methods: [DbCreditCardSample, DbBankTransferSample, DbCashSample],
  ch_installments: [
    dbOnePayment,
    dbThreeMonths,
    dbSixMonths,
    dbNineMonths,
    twelveMonths,
  ],
};

export const dbCheckout002: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.id002,
  ch_company: dbDefaultCompany,
  ch_amount_to_pay: 787.36,
  ch_currency_amount: 'MXN',
  ch_payment_methods: [DbCashSample, DbCreditCardSample],
  ch_installments: [dbOnePayment, dbThreeMonths, dbSixMonths],
};

export const dbCheckout003: DbCheckout = {
  ch_checkout: CHECKOUTS_ID.id003,
  ch_company: dbDefaultCompany,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [DbBankTransferSample, DbCashSample, DbCreditCardSample],
  ch_installments: [dbOnePayment, dbThreeMonths, dbSixMonths, dbNineMonths],
};
