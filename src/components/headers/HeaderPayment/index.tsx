import { BASE_URL_LOCAL } from '../../../helpers/constants/constants-assets';
import PillPaymentStatus from '../../pills/PillPaymentStatus';
import SvgRemote from '../../_svg/SvgRemote';
import { AppHeaderStyled } from '../AppHeader.styled';

type HeaderPaymentProps = {
  status: string;
  logoRemoteUrl?: string;
};

export default function HeaderPayment({
  status = 'pending',
  logoRemoteUrl = `${BASE_URL_LOCAL}/logos/Logo-Default.svg`,
}: HeaderPaymentProps) {
  console.log('🚀 ~ file: index.tsx:15 ~ logoRemoteUrl:', logoRemoteUrl);
  return (
    <AppHeaderStyled>
      <SvgRemote url={logoRemoteUrl} width={154} height={42} />
      <PillPaymentStatus status={status} />
    </AppHeaderStyled>
  );
}
