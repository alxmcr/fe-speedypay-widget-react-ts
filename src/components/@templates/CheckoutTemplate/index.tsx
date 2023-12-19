import React from 'react';
import { CheckoutContext } from '../../../providers/checkout/CheckoutProvider/CheckoutContext';
import FormCheckout from '../../forms/FormCheckout';
import HeaderCheckoutForm from '../../headers/HeaderCheckoutForm';

export default function CheckoutTemplate() {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <article>
      <HeaderCheckoutForm />
      <FormCheckout checkout={checkout} />
    </article>
  );
}
