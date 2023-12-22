import { BodyTextOne } from '../../_typography/BodyTexts';
import { PillBaseStyled } from '../PillBase.styled';

type PillAmountToPayProps = {
  amountToPay: string;
};

export default function PillAmountToPay({
  amountToPay = '',
}: PillAmountToPayProps) {
  return (
    <PillBaseStyled>
      <BodyTextOne>{amountToPay}</BodyTextOne>
    </PillBaseStyled>
  );
}
