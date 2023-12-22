import React from 'react';
import { MESSAGES } from '../../../helpers/constants/constants-messages';
import { PAYMENT_METHODS_CODES } from '../../../mock/db/mock-db-payment-methods';
import { CustomerContext } from '../../../providers/checkout/CustomerProvider/CustomerContext';
import { PaymentMethodsContext } from '../../../providers/checkout/PaymentMethodsProvider/PaymentMethodsContext';
import { Checkout } from '../../../types/appTypes';
import { IconNames } from '../../../types/enumsApp';
import BoxCardInfoElements from '../../boxes/BoxCardInfoElements';
import BoxContactInfoElements from '../../boxes/BoxContactInfoElements';
import BoxPaymentMethods from '../../boxes/BoxPaymentMethods';
import ButtonSolid from '../../buttons/ButtonSolid';
import MessageCheckout from '../../messages/MessageCheckout';
import { BodyTextOne } from '../../_typography/BodyTexts';
import { FormCheckoutStyled } from './FormCheckout.styled';

type FormCheckoutProps = {
  checkout: Checkout | null;
};

export default function FormCheckout({ checkout }: FormCheckoutProps) {
  const { customer } = React.useContext(CustomerContext);
  const { currentPaymentMethodCode } = React.useContext(PaymentMethodsContext);

  const handlerMakePayment = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(`Paying with '${currentPaymentMethodCode}'`);
    console.log({ customer });
  };

  if (checkout === null) return null;

  if (checkout?.payment_methods?.length === 0) {
    return <BodyTextOne>No payment methods</BodyTextOne>;
  }

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
      {PAYMENT_METHODS_CODES.cash === currentPaymentMethodCode ? (
        <MessageCheckout
          messageText={MESSAGES.cash.sendInstructions}
          nameIcon={IconNames.coin}
        />
      ) : null}
      {PAYMENT_METHODS_CODES.bankTransfer === currentPaymentMethodCode ? (
        <MessageCheckout
          messageText={MESSAGES.bankTransfer.sendInstructions}
          nameIcon={IconNames.bankTransfer}
        />
      ) : null}
      <ButtonSolid
        btnText={`Pay for ${checkout.currency_amount} ${checkout.amount_to_pay}`}
      />
    </FormCheckoutStyled>
  );
}
