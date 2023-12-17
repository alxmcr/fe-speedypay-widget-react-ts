import { PaymentMethod } from '../../../types/appTypes';
import BoxCardInfoElements from '../../boxes/BoxCardInfoElements';
import BoxContactInfoElements from '../../boxes/BoxContactInfoElements';
import BoxPaymentMethods from '../../boxes/BoxPaymentMethods';
import ButtonSolid from '../../buttons/ButtonSolid';
import { FormCheckoutStyled } from './FormCheckout.styled';

type FormCheckoutProps = {
  amountToPayValue: number;
  amountToPayCurrency: string;
  paymentMethods: PaymentMethod[];
};

export default function FormCheckout({
  amountToPayValue = 0.0,
  amountToPayCurrency = 'MXN',
  paymentMethods = [],
}: FormCheckoutProps) {
  const amountText = `Pay for ${amountToPayCurrency} ${amountToPayValue}`;

  const handlerMakePayment = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(`Paying ${amountToPayValue}`);
  };

  return (
    <FormCheckoutStyled onSubmit={handlerMakePayment}>
      <BoxPaymentMethods
        subtitle="Payment method"
        paymentMethods={paymentMethods}
      />
      <BoxContactInfoElements />
      <BoxCardInfoElements />
      <ButtonSolid btnText={amountText} />
    </FormCheckoutStyled>
  );
}
