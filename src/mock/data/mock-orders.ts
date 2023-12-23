import { Order } from '../../types/appTypes';
import { checkout001, checkout002 } from './mock-checkouts';
import { customer001 } from './mock-customers';
import {
  bankTransferSample,
  cardSample,
  cashSample,
} from './mock-payment-methods';

export const order001: Order = {
  id: 'order-1',
  payment_method: cashSample,
  customer: customer001,
  expiration_date: 1671816214,
  checkout: checkout001,
  status: 'Pending',
};

export const order002: Order = {
  id: 'order-2',
  payment_method: cardSample,
  customer: customer001,
  expiration_date: 1669224214,
  checkout: checkout001,
  status: 'Pending',
};

export const order003: Order = {
  id: 'order-3',
  payment_method: bankTransferSample,
  customer: customer001,
  expiration_date: 1642958614,
  checkout: checkout001,
  status: 'Pending',
};

export const order004: Order = {
  id: 'order-4',
  payment_method: cashSample,
  customer: customer001,
  expiration_date: 1703352270,
  checkout: checkout002,
  status: 'Pending',
};
