import React from 'react';
import { PaymentMethodsContext } from '../../../providers/checkout/PaymentMethodsProvider/PaymentMethodsContext';
import { PaymentMethod } from '../../../types/appTypes';
import { BodyTextTwo } from '../../typography/BodyTexts';
import TabPaymentMethod from '../TabPaymentMethod';
import { TabsPaymentMethodsStyled } from './TabsPaymentMethods.styled';

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
    <TabsPaymentMethodsStyled>
      {paymentMethods.map((paymentMethod) => (
        <TabPaymentMethod
          key={paymentMethod.id}
          nameIcon={paymentMethod.code}
          paymentMethodName={paymentMethod.name}
          isSelected={paymentMethod.code === currentPaymentMethodCode}
          handlerClick={() =>
            paymentMethod.isDisabled ? null : handlerClickTab(paymentMethod)
          }
        />
      ))}
    </TabsPaymentMethodsStyled>
  );
}
