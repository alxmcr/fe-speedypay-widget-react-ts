import { NumberNames } from '../../../types/enumsApp';
import AppNumber from '../../_numbers/AppNumber';
import { BodyTextOne } from '../../_typography/BodyTexts';

type AppStepProps = {
  stepNumber: string;
  text: string;
};

export default function AppStep({
  text = '',
  stepNumber = NumberNames.one,
}: AppStepProps) {
  return (
    <div>
      <AppNumber numberName={stepNumber} />
      <BodyTextOne>{text}</BodyTextOne>
    </div>
  );
}
