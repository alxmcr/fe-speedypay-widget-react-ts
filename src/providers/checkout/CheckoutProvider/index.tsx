import useCheckout from '../../../hooks/useCheckout';
import { CheckoutContext, CheckoutContextData } from './CheckoutContext';

type CheckoutProviderProps = {
  children: React.ReactNode;
};

export default function CheckoutProvider({ children }: CheckoutProviderProps) {
  const { checkout, loadingCheckout } = useCheckout({
    checkoutId: 'checkout-001',
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
