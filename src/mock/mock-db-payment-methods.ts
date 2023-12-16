import { DbPaymentMethod } from '../types/serviceTypes';

export const BankTransferSample: DbPaymentMethod = {
  pm_payment_method: 'pay-method-001',
  pm_code: 'bank_transfer',
  pm_name: 'Bank transfer',
  pm_is_disabled: false,
};

export const CashSample: DbPaymentMethod = {
  pm_payment_method: 'pay-method-002',
  pm_code: 'cash',
  pm_name: 'Cash',
  pm_is_disabled: false,
};

export const CashSampleDisabled: DbPaymentMethod = {
  pm_payment_method: 'pay-method-002-1',
  pm_code: 'cash',
  pm_name: 'Cash',
  pm_is_disabled: true,
};

export const CreditCardSample: DbPaymentMethod = {
  pm_payment_method: 'pay-method-003',
  pm_code: 'card',
  pm_name: 'Card',
  pm_is_disabled: false,
};
