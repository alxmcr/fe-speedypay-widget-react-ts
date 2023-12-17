import React from 'react';
import { Checkout } from '../../../types/appTypes';
import BoxCardInfoElements from '../../boxes/BoxCardInfoElements';
import BoxContactInfoElements from '../../boxes/BoxContactInfoElements';
import BoxPaymentMethods from '../../boxes/BoxPaymentMethods';
import ButtonSolid from '../../buttons/ButtonSolid';
import { FormCheckoutStyled } from './FormCheckout.styled';
import { PAYMENT_METHODS_CODES } from '../../../mock/db/mock-db-payment-methods';
import { PaymentMethodsContext } from '../../../providers/checkout/PaymentMethodsProvider/PaymentMethodsContext';

type FormCheckoutProps = {
  checkout: Checkout | null;
};

export default function FormCheckout({ checkout }: FormCheckoutProps) {
  const { currentPaymentMethodCode } = React.useContext(PaymentMethodsContext);

  if (checkout === null) return null;

  const handlerMakePayment = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(`Paying`);
  };

  return (
    <FormCheckoutStyled onSubmit={handlerMakePayment}>
      <BoxPaymentMethods
        subtitle="Payment method"
        paymentMethods={checkout.payment_methods}
      />
      <BoxContactInfoElements />
      {PAYMENT_METHODS_CODES.card === currentPaymentMethodCode ? (
        <BoxCardInfoElements />
      ) : null}
      <ButtonSolid
        btnText={`Pay for ${checkout.currency_amount} ${checkout.amount_to_pay}`}
      />
    </FormCheckoutStyled>
  );
}
