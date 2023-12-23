import React from 'react';
import { LoadingStates } from '../../../helpers/constants/constants-services';
import { Order } from '../../../types/appTypes';

export type OrderContextData = {
  order: Order | null;
  loadingOrder: string;
  errorOrder: string | null;
};

const initialOrder: OrderContextData = {
  order: null,
  loadingOrder: LoadingStates.IDLE,
  errorOrder: null,
};

export const OrderContext = React.createContext(initialOrder);
