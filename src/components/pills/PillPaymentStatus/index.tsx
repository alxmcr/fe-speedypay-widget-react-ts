import { IconNames } from '../../../types/enumsApp';
import AppIcon from '../../icons/AppIcon';
import { BodyTextOne } from '../../typography/BodyTexts';
import { PillBaseStyled } from '../PillBase.styled';

type PillPaymentStatusProps = {
  status: 'pending' | 'success';
};

export default function PillPaymentStatus({
  status = 'pending',
}: PillPaymentStatusProps) {
  return (
    <PillBaseStyled>
      <AppIcon
        iconName={status === 'pending' ? IconNames.pending : IconNames.check}
      />
      <BodyTextOne>
        {status === 'pending' ? 'Need to pay' : 'Success'}
      </BodyTextOne>
    </PillBaseStyled>
  );
}
