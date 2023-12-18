import useCheckout from '../../../hooks/useCheckout';
import { CHECKOUTS_ID } from '../../../mock/db/mock-db-checkouts';
import { CheckoutContext, CheckoutContextData } from './CheckoutContext';

type CheckoutProviderProps = {
  children: React.ReactNode;
};

export default function CheckoutProvider({ children }: CheckoutProviderProps) {
  const { checkout, loadingCheckout } = useCheckout({
    checkoutId: CHECKOUTS_ID.empty,
  });

  const value: CheckoutContextData = {
    checkout,
    loadingCheckout,
    errorCheckout: null,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
