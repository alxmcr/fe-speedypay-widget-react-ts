import { PaymentMethod } from '../../../types/appTypes';
import { BodyTextTwo } from '../../typography/BodyTexts';
import TabPaymentMethod from '../TabPaymentMethod';

type TabsPaymentMethodsProps = {
  paymentMethods: PaymentMethod[];
};

export default function TabsPaymentMethods({
  paymentMethods = [],
}: TabsPaymentMethodsProps) {
  if (paymentMethods.length === 0) {
    return <BodyTextTwo>No payment methods allowed.</BodyTextTwo>;
  }

  return (
    <div>
      {paymentMethods.map((paymentMethod) => (
        <TabPaymentMethod
          nameIcon={paymentMethod.code}
          paymentMethodName={paymentMethod.name}
        />
      ))}
    </div>
  );
}
