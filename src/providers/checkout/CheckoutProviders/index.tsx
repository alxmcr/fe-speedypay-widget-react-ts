import CheckoutProvider from '../CheckoutProvider';
import PaymentMethodsProvider from '../PaymentMethodsProvider';

type CheckoutProvidersProps = {
  children: React.ReactNode;
};

export default function CheckoutProviders({
  children,
}: CheckoutProvidersProps) {
  return (
    <CheckoutProvider>
      <PaymentMethodsProvider>{children}</PaymentMethodsProvider>
    </CheckoutProvider>
  );
}
