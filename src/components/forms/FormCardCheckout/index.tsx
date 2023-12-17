import BoxCardInfoElements from '../../boxes/BoxCardInfoElements';
import BoxPaymentMethods from '../../boxes/BoxPaymentMethods';
import ButtonSolid from '../../buttons/ButtonSolid';
import { FormCardCheckoutStyled } from './FormCardCheckout.styled';

type FormCardCheckoutProps = {
  amountToPayValue: number;
  amountToPayCurrency: string;
};

export default function FormCardCheckout({
  amountToPayValue = 0.0,
  amountToPayCurrency = 'MXN',
}: FormCardCheckoutProps) {
  const amountText = `Pay for ${amountToPayCurrency} ${amountToPayValue}`;

  const handlerMakePayment = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(`Paying ${amountToPayValue}`);
  };

  return (
    <FormCardCheckoutStyled onSubmit={handlerMakePayment}>
      <BoxPaymentMethods subtitle="Payment method" />
      <BoxCardInfoElements />
      <ButtonSolid btnText={amountText} />
    </FormCardCheckoutStyled>
  );
}
