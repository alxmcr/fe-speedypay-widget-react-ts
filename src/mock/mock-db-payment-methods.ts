import { DbPaymentMethod } from '../types/serviceTypes';

export const DbBankTransferSample: DbPaymentMethod = {
  pm_payment_method: 'pay-method-001',
  pm_code: 'bank_transfer',
  pm_name: 'Bank transfer',
  pm_is_disabled: false,
};

export const DbCashSample: DbPaymentMethod = {
  pm_payment_method: 'pay-method-002',
  pm_code: 'cash',
  pm_name: 'Cash',
  pm_is_disabled: false,
};

export const DbCashSampleDisabled: DbPaymentMethod = {
  pm_payment_method: 'pay-method-002-1',
  pm_code: 'cash',
  pm_name: 'Cash',
  pm_is_disabled: true,
};

export const DbCreditCardSample: DbPaymentMethod = {
  pm_payment_method: 'pay-method-003',
  pm_code: 'card',
  pm_name: 'Card',
  pm_is_disabled: false,
};
