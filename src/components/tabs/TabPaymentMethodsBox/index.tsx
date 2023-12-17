import React from 'react';
import { LoadingStates } from '../../../helpers/constants/constants-services';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import { BodyTextTwo } from '../../typography/BodyTexts';
import { SubtitleOne } from '../../typography/Subtitles';
import TabsPaymentMethods from '../TabsPaymentMethods';
import { TabPaymentMethodsBoxStyled } from './TabPaymentMethodsBox.styled';

type TabPaymentMethodsBoxProps = {
  subtitle: string;
};

export default function TabPaymentMethodsBox({
  subtitle = '',
}: TabPaymentMethodsBoxProps) {
  const { checkout, loadingCheckout } = React.useContext(CheckoutContext);

  if (LoadingStates.PENDING === loadingCheckout) {
    return (
      <TabPaymentMethodsBoxStyled>
        <SubtitleOne>{subtitle}</SubtitleOne>
        <BodyTextTwo>Loading...</BodyTextTwo>
      </TabPaymentMethodsBoxStyled>
    );
  }

  if (LoadingStates.SUCCESS === loadingCheckout) {
    if (checkout === null) {
      return (
        <TabPaymentMethodsBoxStyled>
          <SubtitleOne>{subtitle}</SubtitleOne>
          <BodyTextTwo>No checkout</BodyTextTwo>
        </TabPaymentMethodsBoxStyled>
      );
    } else {
      if (checkout.payment_methods?.length > 0) {
        return (
          <TabPaymentMethodsBoxStyled>
            <SubtitleOne>{subtitle}</SubtitleOne>
            <TabsPaymentMethods paymentMethods={checkout.payment_methods} />
          </TabPaymentMethodsBoxStyled>
        );
      }
    }
  }
  return null;
}
