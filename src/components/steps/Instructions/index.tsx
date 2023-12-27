import { ResultStep } from '../../../types/appTypes';
import { BodyTextOne } from '../../_typography/BodyTexts';
import StepsGroup from '../StepsGroup';
import { InstructionsStyled } from './Instructions.styled';

type InstructionsProps = {
  steps: ResultStep[];
};

export default function Instructions({ steps }: InstructionsProps) {
  return (
    <InstructionsStyled>
      <BodyTextOne>
        Please, following these steps before payment due.
      </BodyTextOne>
      <StepsGroup steps={steps} />
    </InstructionsStyled>
  );
}
