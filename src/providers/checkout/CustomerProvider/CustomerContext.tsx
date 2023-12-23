import React from 'react';
import { Customer } from '../../../types/appTypes';

export type CustomerContextData = {
  customer: Customer;
  setCustomer: React.Dispatch<React.SetStateAction<Customer>>;
};

export const initialCustomer: Customer = {
  id: '',
  fullname: '',
  email: '',
};

const initialCustomerData: CustomerContextData = {
  customer: initialCustomer,
  setCustomer: () => {},
};

export const CustomerContext = React.createContext(initialCustomerData);
