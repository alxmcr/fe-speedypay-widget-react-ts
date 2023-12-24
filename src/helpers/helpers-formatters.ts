import { Locale, format } from 'date-fns';
import { DataOrder, Order } from '../types/appTypes';

export const FORMAT_DATETIMES = {
  full: 'MMMM do, yyyy HH:mm:ss',
};

export const FORMAT_DATES = {
  large: 'MMMM do, yyyy',
  short: 'MMM do, yyyy',
};

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
