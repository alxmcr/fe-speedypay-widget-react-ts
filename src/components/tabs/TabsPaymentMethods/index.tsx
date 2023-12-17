import React from 'react';
import { PaymentMethod } from '../../../types/appTypes';
import { BodyTextTwo } from '../../typography/BodyTexts';
import TabPaymentMethod from '../TabPaymentMethod';
import { PaymentMethodsContext } from '../../../providers/checkout/PaymentMethodsProvider/PaymentMethodsContext';

type TabsPaymentMethodsProps = {
  paymentMethods: PaymentMethod[];
};

export default function TabsPaymentMethods({
  paymentMethods = [],
}: TabsPaymentMethodsProps) {
  const { currentPaymentMethodCode, setCurrentPaymentMethodCode } =
    React.useContext(PaymentMethodsContext);

  const handlerClickTab = (paymentMethod: PaymentMethod) => {
    setCurrentPaymentMethodCode(paymentMethod.code);
  };

  if (paymentMethods.length === 0) {
    return <BodyTextTwo>No payment methods allowed.</BodyTextTwo>;
  }

  return (
    <div>
      {paymentMethods.map((paymentMethod) => (
        <TabPaymentMethod
          nameIcon={paymentMethod.code}
          paymentMethodName={paymentMethod.name}
          isSelected={paymentMethod.code === currentPaymentMethodCode}
          handlerClick={() =>
            paymentMethod.isDisabled ? null : handlerClickTab(paymentMethod)
          }
        />
      ))}
    </div>
  );
}
