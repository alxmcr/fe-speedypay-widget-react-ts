import { DataOrder, Order } from '../types/appTypes';

export const formatterOrderLikeAnArray = (order: Order) => {
  const formatted: DataOrder[] = [
    {
      label: 'Order id',
      value: order.id,
    },
    {
      label: 'Expiration date',
      value: order.expiration_date.toString(),
    },
    {
      label: 'Payment method',
      value: order.payment_method.name,
    },
    {
      label: 'Customer',
      value: order.customer.fullname,
    },
    {
      label: 'Status',
      value: order.status,
    },
  ];

  return formatted;
};
