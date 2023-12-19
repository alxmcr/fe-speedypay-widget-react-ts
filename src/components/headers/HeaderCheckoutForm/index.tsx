import { BASE_URL_LOGOS } from '../../../mock/db/mock-db-companies';
import SvgRemote from '../../svg/SvgRemote';
import { AppHeaderStyled } from '../AppHeader.styled';

export default function HeaderCheckoutForm() {
  return (
    <AppHeaderStyled>
      <SvgRemote
        url={`${BASE_URL_LOGOS}/logos/Logo-Fitters.svg`}
        width={154}
        height={42}
      />
    </AppHeaderStyled>
  );
}
