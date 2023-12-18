import React from 'react';
import {
  CustomerContext,
  CustomerContextData,
  initialCustomer,
} from './CustomerContext';

type CustomerProviderProps = {
  children: React.ReactNode;
};

export default function CustomerProvider({ children }: CustomerProviderProps) {
  const [customer, setCustomer] = React.useState(initialCustomer);

  const value: CustomerContextData = {
    customer,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}
