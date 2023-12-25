import { Locale, format } from 'date-fns';
import { Charge, DataCharge, DataOrder, Order } from '../types/appTypes';

export const FORMAT_DATETIMES = {
  full: 'MMMM do, yyyy HH:mm:ss',
};

export const FORMAT_DATES = {
  large: 'MMMM do, yyyy',
  short: 'MMM do, yyyy',
};

export function formatDate(
  someDate: Date,
  formatStr: string,
  localeFormat: Locale,
) {
  if (someDate === null || someDate === undefined) {
    return 'Error date';
  }

  return format(someDate, formatStr, { locale: localeFormat });
}

export function formatTimestamp(
  fbTimestampMilliseconds: number,
  formatStr: string,
  localeFormat: Locale,
): string {
  return formatDate(new Date(fbTimestampMilliseconds), formatStr, localeFormat);
}

export const formatterOrderLikeAnArray = (order: Order) => {
  const formatted: DataOrder[] = [
    {
      label: 'Order id',
      type: 'string',
      value: order.id,
    },
    {
      label: 'Expiration date',
      type: 'datetime',
      value: order.expiration_date.toString(),
    },
    {
      label: 'Payment method',
      type: 'string',
      value: order.payment_method.name,
    },
    {
      label: 'Customer',
      type: 'string',
      value: order.customer.fullname,
    },
    {
      label: 'Status',
      type: 'string',
      value: order.status,
    },
  ];

  return formatted;
};

export const formatterChargeLikeAnArray = (charge: Charge) => {
  const formatted: DataCharge[] = [
    {
      label: 'Charge id',
      type: 'string',
      value: charge.id,
    },
    {
      label: 'Pay confirmation date',
      type: 'datetime',
      value: charge.expiration_date.toString(),
    },
    {
      label: 'Payment method',
      type: 'string',
      value: charge.payment_method.name,
    },
    {
      label: 'Customer',
      type: 'string',
      value: charge.customer.fullname,
    },
    {
      label: 'Status',
      type: 'string',
      value: charge.status,
    },
  ];

  return formatted;
};
