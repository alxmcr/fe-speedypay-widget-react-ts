export type DbCustomer = {
  cu_customer: string;
  cu_fullname: string;
  cu_email: string;
};

export type DbCompany = {
  co_company: string;
  co_name: string;
  co_logo_url: string;
};

export type DbPaymentMethod = {
  pm_payment_method: string;
  pm_code: string;
  pm_name: string;
  pm_is_disabled: boolean;
};

export type DbInstallment = {
  in_installment: string;
  in_name: string;
  in_code: string;
};

export type DbCheckout = {
  ch_checkout: string;
  ch_amount_to_pay: number;
  ch_currency_amount: string;
  ch_company: DbCompany;
  ch_payment_methods: DbPaymentMethod[];
  ch_installments: DbInstallment[];
};

export type DbOrder = {
  or_order: string;
  or_expiration_date: number;
  or_payment_method: DbPaymentMethod;
  or_customer: DbCustomer;
  or_status: string;
  or_reference_number: string;
  or_checkout: DbCheckout;
};

export type DbCharge = {
  cha_charge: string;
  cha_expiration_date: number;
  cha_payment_method: DbPaymentMethod;
  cha_customer: DbCustomer;
  cha_status: string;
  cha_reference_number: string;
  cha_checkout: DbCheckout;
};
