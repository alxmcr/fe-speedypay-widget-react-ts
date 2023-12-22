import { Order } from '../../types/appTypes';
import { checkout001 } from './mock-checkouts';
import { customer001 } from './mock-customers';
import { cashSample } from './mock-payment-methods';

export const order001: Order = {
  id: 'order-1',
  payment_method: cashSample,
  customer: customer001,
  expiration_date: 1703287488,
  checkout: checkout001,
  status: 'Pending',
};
