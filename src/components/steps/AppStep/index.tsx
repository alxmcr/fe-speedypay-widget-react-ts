import { NumberNames } from '../../../types/enumsApp';
import AppNumber from '../../_numbers/AppNumber';
import { BodyTextOne } from '../../_typography/BodyTexts';
import { AppStepStyled } from './AppStep.styled';

type AppStepProps = {
  stepNumber: string;
  text: string;
};

export default function AppStep({
  text = '',
  stepNumber = NumberNames.one,
}: AppStepProps) {
  return (
    <AppStepStyled>
      <AppNumber numberName={stepNumber} />
      <BodyTextOne>{text}</BodyTextOne>
    </AppStepStyled>
  );
}
