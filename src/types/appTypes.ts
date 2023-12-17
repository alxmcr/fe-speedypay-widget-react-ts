export type AppOptionOnSelect = {
  id: string;
  value: string;
  text: string;
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
