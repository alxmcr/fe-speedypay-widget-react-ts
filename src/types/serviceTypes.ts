export type DbPaymentMethod = {
  pm_payment_method: string;
  pm_code: 'cash' | 'bank_transfer' | 'card' | 'card';
  pm_name: string;
  pm_is_disabled: boolean;
};
