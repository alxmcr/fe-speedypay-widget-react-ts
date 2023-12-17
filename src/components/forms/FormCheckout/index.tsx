import BoxPaymentMethods from '../../boxes/BoxPaymentMethods';
import ButtonSolid from '../../buttons/ButtonSolid';
import { FormCheckoutStyled } from './FormCheckout.styled';

type FormCheckoutProps = {
  amountToPayValue: number;
  amountToPayCurrency: string;
};

export default function FormCheckout({
  amountToPayValue = 0.0,
  amountToPayCurrency = 'MXN',
}: FormCheckoutProps) {
  const amountText = `Pay for ${amountToPayCurrency} ${amountToPayValue}`;

  const handlerMakePayment = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(`Paying ${amountToPayValue}`);
  };

  return (
    <FormCheckoutStyled onSubmit={handlerMakePayment}>
      <BoxPaymentMethods subtitle="Payment method" />
      <ButtonSolid btnText={amountText} />
    </FormCheckoutStyled>
  );
}
