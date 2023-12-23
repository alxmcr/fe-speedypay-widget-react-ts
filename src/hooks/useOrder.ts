import React from 'react';
import { LoadingStates } from '../helpers/constants/constants-services';
import {
  ORDERS_ID,
  dbOrder001,
  dbOrder002,
  dbOrder003,
} from '../mock/db/mock-db-orders';
import { mapperDbOrderToOrder } from '../mock/helpers-mappers';
import { Order } from '../types/appTypes';
import { DbOrder } from '../types/databaseTypes';

export default function useOrder({ orderId = '' }) {
  const [order, setOrder] = React.useState<Order | null>(null);
  const [loadingOrder, setLoadingOrder] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    setLoadingOrder(LoadingStates.PENDING);

    let dbOrderFound: DbOrder | null = null;

    switch (orderId) {
      case ORDERS_ID.id001:
        dbOrderFound = dbOrder001;
        break;
      case ORDERS_ID.id002:
        dbOrderFound = dbOrder002;
        break;
      case ORDERS_ID.id003:
        dbOrderFound = dbOrder003;
        break;
      default:
        dbOrderFound = dbOrder001;
        break;
    }

    let order =
      dbOrderFound !== null ? mapperDbOrderToOrder(dbOrderFound) : null;
    setOrder(order);
    setLoadingOrder(LoadingStates.SUCCESS);
  }, [orderId]);

  return { order, loadingOrder };
}
