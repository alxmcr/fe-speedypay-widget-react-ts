import React from 'react';
import { LoadingStates } from '../../../helpers/constants/constants-services';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import TabsPaymentMethods from '../../tabs/TabsPaymentMethods';
import { BodyTextTwo } from '../../typography/BodyTexts';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxPaymentMethodsStyled } from './BoxPaymentMethods.styled';

type BoxPaymentMethodsProps = {
  subtitle: string;
};

export default function BoxPaymentMethods({
  subtitle = '',
}: BoxPaymentMethodsProps) {
  const { checkout, loadingCheckout } = React.useContext(CheckoutContext);

  if (LoadingStates.PENDING === loadingCheckout) {
    return (
      <BoxPaymentMethodsStyled>
        <SubtitleOne>{subtitle}</SubtitleOne>
        <BodyTextTwo>Loading...</BodyTextTwo>
      </BoxPaymentMethodsStyled>
    );
  }

  if (LoadingStates.SUCCESS === loadingCheckout) {
    if (checkout === null) {
      return (
        <BoxPaymentMethodsStyled>
          <SubtitleOne>{subtitle}</SubtitleOne>
          <BodyTextTwo>No checkout</BodyTextTwo>
        </BoxPaymentMethodsStyled>
      );
    } else {
      if (checkout.payment_methods?.length > 0) {
        return (
          <BoxPaymentMethodsStyled>
            <SubtitleOne>{subtitle}</SubtitleOne>
            <TabsPaymentMethods paymentMethods={checkout.payment_methods} />
          </BoxPaymentMethodsStyled>
        );
      }
    }
  }
  return null;
}
