import { BASE_URL_LOCAL } from '../../../helpers/constants/constants-assets';
import SvgRemote from '../../_svg/SvgRemote';
import PillAmountToPay from '../../pills/PillAmountToPay';
import { AppHeaderStyled } from '../AppHeader.styled';

type HeaderCheckoutFormProps = {
  logoRemoteUrl?: string;
};

export default function HeaderCheckoutForm({
  logoRemoteUrl = `${BASE_URL_LOCAL}/logos/Logo-Default.svg`,
}: HeaderCheckoutFormProps) {
  return (
    <AppHeaderStyled>
      <SvgRemote url={logoRemoteUrl} width={154} height={42} />
      <PillAmountToPay amountToPay="MXN 2,780.00" />
    </AppHeaderStyled>
  );
}
