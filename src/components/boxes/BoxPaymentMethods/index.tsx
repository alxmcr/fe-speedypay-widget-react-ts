import { PaymentMethod } from '../../../types/appTypes';
import TabsPaymentMethods from '../../tabs/TabsPaymentMethods';
import { SubtitleOne } from '../../typography/Subtitles';
import { BoxPaymentMethodsStyled } from './BoxPaymentMethods.styled';

type BoxPaymentMethodsProps = {
  subtitle: string;
  paymentMethods: PaymentMethod[];
};

export default function BoxPaymentMethods({
  subtitle = '',
  paymentMethods = [],
}: BoxPaymentMethodsProps) {
  return (
    <BoxPaymentMethodsStyled>
      <SubtitleOne>{subtitle}</SubtitleOne>
      <TabsPaymentMethods paymentMethods={paymentMethods} />
    </BoxPaymentMethodsStyled>
  );
}
