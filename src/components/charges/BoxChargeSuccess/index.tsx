import IconBigCheck from '../../_icons/big/IconBigCheck';
import { BodyTextOne } from '../../_typography/BodyTexts';
import { HeadingSix } from '../../_typography/Headings';
import { BoxChargeSuccessStyled } from './BoxChargeSuccess.styled';

export default function BoxChargeSuccess() {
  return (
    <BoxChargeSuccessStyled>
      <IconBigCheck />
      <HeadingSix>Success</HeadingSix>
      <BodyTextOne>Your payment has been confirmed!</BodyTextOne>
    </BoxChargeSuccessStyled>
  );
}
