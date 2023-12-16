export type DbCompany = {
  co_company: string;
  co_name: string;
  co_logo_url: string;
};

export type DbPaymentMethod = {
  pm_payment_method: string;
  pm_code: 'cash' | 'bank_transfer' | 'card' | 'card';
  pm_name: string;
  pm_is_disabled: boolean;
};

export type DbCheckout = {
  ch_checkout: string;
  ch_amount_to_pay: number;
  ch_currency_amount: string;
  ch_company: DbCompany;
  ch_payment_methods: DbPaymentMethod[];
};
