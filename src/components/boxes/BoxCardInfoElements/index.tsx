import React from 'react';
import FormElementsCardInfo from '../../form-fields-groups/FormElementsCardInfo';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxCardInfoElementsStyled } from './BoxCardInfoElements.styled';
import { PaymentMethodsContext } from '../../../providers/checkout/PaymentMethodsProvider/PaymentMethodsContext';

export default function BoxCardInfoElements() {
  const { currentPaymentMethodCode } = React.useContext(PaymentMethodsContext);
  console.log(
    '🚀 ~ file: index.tsx:9 ~ BoxCardInfoElements ~ currentPaymentMethodCode:',
    currentPaymentMethodCode,
  );

  return (
    <BoxCardInfoElementsStyled>
      <SubtitleOne>Card information</SubtitleOne>
      <FormElementsCardInfo />
    </BoxCardInfoElementsStyled>
  );
}
