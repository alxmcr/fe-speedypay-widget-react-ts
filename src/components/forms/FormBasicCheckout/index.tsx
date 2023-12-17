import BoxContactInfoElements from '../../boxes/BoxContactInfoElements';
import BoxPaymentMethods from '../../boxes/BoxPaymentMethods';
import ButtonSolid from '../../buttons/ButtonSolid';
import { FormBasicCheckoutStyled } from './FormBasicCheckout.styled';

type FormBasicCheckoutProps = {
  amountToPayValue: number;
  amountToPayCurrency: string;
};

export default function FormBasicCheckout({
  amountToPayValue = 0.0,
  amountToPayCurrency = 'MXN',
}: FormBasicCheckoutProps) {
  const amountText = `Pay for ${amountToPayCurrency} ${amountToPayValue}`;

  const handlerMakePayment = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(`Paying ${amountToPayValue}`);
  };

  return (
    <FormBasicCheckoutStyled onSubmit={handlerMakePayment}>
      <BoxPaymentMethods subtitle="Payment method" />
      <BoxContactInfoElements />
      <ButtonSolid btnText={amountText} />
    </FormBasicCheckoutStyled>
  );
}
