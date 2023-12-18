import CheckoutProvider from '../CheckoutProvider';
import CustomerProvider from '../CustomerProvider';
import PaymentMethodsProvider from '../PaymentMethodsProvider';

type CheckoutProvidersProps = {
  children: React.ReactNode;
};

export default function CheckoutProviders({
  children,
}: CheckoutProvidersProps) {
  return (
    <CheckoutProvider>
      <CustomerProvider>
        <PaymentMethodsProvider>{children}</PaymentMethodsProvider>
      </CustomerProvider>
    </CheckoutProvider>
  );
}
