import { DbCheckout } from '../types/serviceTypes';
import {
  mockCompanyBetsson,
  mockCompanyFinberry,
  mockCompanyFittersOriginal,
} from './mock-companies';
import { DbCashSample } from './mock-db-payment-methods';

export const checkout001: DbCheckout = {
  ch_checkout: 'checkout-001',
  ch_company: mockCompanyBetsson,
  ch_amount_to_pay: 1265.89,
  ch_currency_amount: '$',
  ch_payment_methods: [DbCashSample],
};

export const checkout002: DbCheckout = {
  ch_checkout: 'checkout-002',
  ch_company: mockCompanyFinberry,
  ch_amount_to_pay: 787.36,
  ch_currency_amount: 'MXN',
  ch_payment_methods: [],
};

export const checkout003: DbCheckout = {
  ch_checkout: 'checkout-003',
  ch_company: mockCompanyFittersOriginal,
  ch_amount_to_pay: 859.12,
  ch_currency_amount: 'USD',
  ch_payment_methods: [],
};
