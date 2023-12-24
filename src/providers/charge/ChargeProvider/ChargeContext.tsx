import React from 'react';
import { LoadingStates } from '../../../helpers/constants/constants-services';
import { Charge } from '../../../types/appTypes';

export type ChargeContextData = {
  charge: Charge | null;
  loadingCharge: string;
  errorCharge: string | null;
};

const initialCharge: ChargeContextData = {
  charge: null,
  loadingCharge: LoadingStates.IDLE,
  errorCharge: null,
};

export const ChargeContext = React.createContext(initialCharge);
