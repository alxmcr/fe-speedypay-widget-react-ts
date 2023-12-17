import React from 'react';
import {
  PaymentMethodsContext,
  PaymentMethodsContextData,
} from './PaymentMethodsContext';
import { CheckoutContext } from '../CheckoutProvider/CheckoutContext';
import { LoadingStates } from '../../../helpers/constants/constants-services';

type PaymentMethodsProviderProps = {
  children: React.ReactNode;
};

export default function PaymentMethodsProvider({
  children,
}: PaymentMethodsProviderProps) {
  const { checkout, loadingCheckout } = React.useContext(CheckoutContext);
  const [currentPaymentMethodCode, setCurrentPaymentMethodCode] =
    React.useState<string>('');

  const value: PaymentMethodsContextData = {
    currentPaymentMethodCode,
    setCurrentPaymentMethodCode,
  };

  React.useEffect(() => {
    if (LoadingStates.SUCCESS === loadingCheckout) {
      if (checkout !== null) {
        if (checkout?.payment_methods.length > 0) {
          const firstPaymentMethod = checkout?.payment_methods[0];
          setCurrentPaymentMethodCode(firstPaymentMethod.code);
        }
      }
    }
  }, [loadingCheckout]);

  return (
    <PaymentMethodsContext.Provider value={value}>
      {children}
    </PaymentMethodsContext.Provider>
  );
}
