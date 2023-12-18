export type DbCustomer = {
  cu_customer: string;
  cu_fullname: string;
  cu_email: string;
  cu_cardNumber: string;
  cu_expirationDate: string;
  cu_cvc: string;
  cu_cardHolderName: string;
  cu_installments: string;
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
};
