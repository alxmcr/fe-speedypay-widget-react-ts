import React from 'react';
import { PaymentMethod } from '../../../types/appTypes';
import TabsPaymentMethods from '../../tabs/TabsPaymentMethods';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxPaymentMethodsStyled } from './BoxPaymentMethods.styled';
import { PaymentMethodsContext } from '../../../providers/checkout/PaymentMethodsProvider/PaymentMethodsContext';

type BoxPaymentMethodsProps = {
  subtitle: string;
  paymentMethods: PaymentMethod[];
};

export default function BoxPaymentMethods({
  subtitle = '',
  paymentMethods = [],
}: BoxPaymentMethodsProps) {
  const { setCurrentPaymentMethodCode } = React.useContext(
    PaymentMethodsContext,
  );

  React.useEffect(() => {
    if (paymentMethods.length > 0) {
      const firstPaymentMethod = paymentMethods[0];
      setCurrentPaymentMethodCode(firstPaymentMethod.code);
    }
  }, [paymentMethods.length]);

  return (
    <BoxPaymentMethodsStyled>
      <SubtitleOne>{subtitle}</SubtitleOne>
      <TabsPaymentMethods paymentMethods={paymentMethods} />
    </BoxPaymentMethodsStyled>
  );
}
