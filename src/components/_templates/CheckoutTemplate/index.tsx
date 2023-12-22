import React from 'react';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import FormCheckout from '../../forms/FormCheckout';
import HeaderCheckoutForm from '../../headers/HeaderCheckoutForm';
import { AppTemplateStyled } from '../AppTemplate.styled';

export default function CheckoutTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <AppTemplateStyled>
      <HeaderCheckoutForm />
      <FormCheckout checkout={checkout} />
    </AppTemplateStyled>
  );
}
