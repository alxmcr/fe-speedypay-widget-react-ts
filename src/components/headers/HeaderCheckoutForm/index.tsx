import { BASE_URL_LOCAL } from '../../../helpers/constants/constants-assets';
import SvgRemote from '../../svg/SvgRemote';
import { AppHeaderStyled } from '../AppHeader.styled';

export default function HeaderCheckoutForm() {
  return (
    <AppHeaderStyled>
      <SvgRemote
        url={`${BASE_URL_LOCAL}/logos/Logo-Fitters.svg`}
        width={154}
        height={42}
      />
    </AppHeaderStyled>
  );
}
