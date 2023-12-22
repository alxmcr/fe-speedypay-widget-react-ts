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
        Por favor, realiza los siguientes pasos antes de la fecha de expiración.
      </BodyTextOne>
      <StepsGroup steps={steps} />
    </InstructionsStyled>
  );
}
