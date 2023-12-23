import { LoadingStates } from '../../../helpers/constants/constants-services';
import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../_icons/AppIcon';
import { BodyTextOne } from '../../_typography/BodyTexts';
import { PillBaseStyled } from '../PillBase.styled';

type PillPaymentStatusProps = {
  status: string;
};

export default function PillPaymentStatus({
  status = 'pending',
}: PillPaymentStatusProps) {
  return (
    <PillBaseStyled>
      <AppIcon
        iconName={
          status === LoadingStates.PENDING ? IconNames.pending : IconNames.check
        }
      />
      <BodyTextOne>
        {status === LoadingStates.PENDING ? 'Need to pay' : 'Success'}
      </BodyTextOne>
    </PillBaseStyled>
  );
}
