import NumberOne from '../../_numbers/NumberOne';
import { BodyTextOne } from '../../_typography/BodyTexts';

type AppStepProps = {
  text: string;
};

export default function AppStep({ text = '' }: AppStepProps) {
  return (
    <div>
      <NumberOne />
      <BodyTextOne>{text}</BodyTextOne>
    </div>
  );
}
