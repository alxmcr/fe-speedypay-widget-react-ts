import { BASE_URL_LOCAL } from '../../../helpers/constants/constants-assets';
import PillPaymentStatus from '../../pills/PillPaymentStatus';
import SvgRemote from '../../_svg/SvgRemote';
import { AppHeaderStyled } from '../AppHeader.styled';

type HeaderPaymentProps = {
  status: string;
};

export default function HeaderPayment({
  status = 'pending',
}: HeaderPaymentProps) {
  console.log('🚀 ~ file: index.tsx:13 ~ status:', status);
  return (
    <AppHeaderStyled>
      <SvgRemote
        url={`${BASE_URL_LOCAL}/logos/Logo-Fitters.svg`}
        width={154}
        height={42}
      />
      <PillPaymentStatus status={status} />
    </AppHeaderStyled>
  );
}
