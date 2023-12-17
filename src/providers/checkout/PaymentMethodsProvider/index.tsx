import React from 'react';
import {
  PaymentMethodsContext,
  PaymentMethodsContextData,
} from './PaymentMethodsContext';

type PaymentMethodsProviderProps = {
  children: React.ReactNode;
};

export default function PaymentMethodsProvider({
  children,
}: PaymentMethodsProviderProps) {
  const [currentPaymentMethodCode, setCurrentPaymentMethodCode] =
    React.useState<string>('');

  const value: PaymentMethodsContextData = {
    currentPaymentMethodCode,
    setCurrentPaymentMethodCode,
  };

  return (
    <PaymentMethodsContext.Provider value={value}>
      {children}
    </PaymentMethodsContext.Provider>
  );
}
