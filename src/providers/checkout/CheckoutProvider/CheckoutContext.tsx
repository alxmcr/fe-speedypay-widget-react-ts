import React from 'react';
import { LoadingStates } from '../../../helpers/constants/constants-services';
import { Checkout } from '../../../types/appTypes';

export type CheckoutContextData = {
  checkout: Checkout | null;
  loadingCheckout: string;
  errorCheckout: string | null;
};

const initialCheckout: CheckoutContextData = {
  checkout: null,
  loadingCheckout: LoadingStates.IDLE,
  errorCheckout: null,
};

export const CheckoutContext = React.createContext(initialCheckout);
