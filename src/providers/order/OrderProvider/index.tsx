import useOrder from '../../../hooks/useOrder';
import { ORDERS_ID } from '../../../mock/db/mock-db-orders';
import { OrderContext, OrderContextData } from './OrderContext';

type OrderProviderProps = {
  children: React.ReactNode;
};

export default function OrderProvider({ children }: OrderProviderProps) {
  const { order, loadingOrder } = useOrder({
    orderId: ORDERS_ID.id003,
  });

  const value: OrderContextData = {
    order,
    loadingOrder,
    errorOrder: null,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
