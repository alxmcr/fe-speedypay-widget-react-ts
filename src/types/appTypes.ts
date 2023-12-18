export type AppOptionOnSelect = {
  id: string;
  value: string;
  text: string;
};

export type Customer = {
  id: string;
  fullname: string;
  email: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  cardHolderName: string;
  installments: string;
};

export type Company = {
  id: string;
  name: string;
  logo_url: string;
};

export type PaymentMethod = {
  id: string;
  code: string;
  name: string;
  isDisabled: boolean;
};

export type Installment = {
  id: string;
  name: string;
  code: string;
};
export type Checkout = {
  id: string;
  amount_to_pay: number;
  currency_amount: string;
  company: Company;
  payment_methods: PaymentMethod[];
};
