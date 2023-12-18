import React from 'react';

export type Customer = {
  fullname: string;
  email: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  cardHolderName: string;
  installments: string;
};

export type CustomerContextData = {
  customer: Customer;
};

const initialCustomer: CustomerContextData = {
  customer: {
    fullname: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    cardHolderName: '',
    installments: '',
  },
};

export const CustomerContext = React.createContext(initialCustomer);
