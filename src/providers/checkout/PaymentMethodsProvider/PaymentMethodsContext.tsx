import React from 'react';

export type PaymentMethodsContextData = {
  currentPaymentMethodCode: string;
  setCurrentPaymentMethodCode: React.Dispatch<React.SetStateAction<string>>;
};

const initialPaymentMethods: PaymentMethodsContextData = {
  currentPaymentMethodCode: '',
  setCurrentPaymentMethodCode: () => {},
};

export const PaymentMethodsContext = React.createContext(initialPaymentMethods);
