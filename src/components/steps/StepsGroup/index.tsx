import { ResultStep } from '../../../types/appTypes';
import AppStep from '../AppStep';
import { StepsGroupStyled } from './StepsGroup.styled';

type StepsGroupProps = {
  steps: ResultStep[];
};

export default function StepsGroup({ steps = [] }: StepsGroupProps) {
  return (
    <StepsGroupStyled>
      {steps.map((step: ResultStep) => (
        <AppStep key={step.id} text={step.name} stepNumber={step.code} />
      ))}
    </StepsGroupStyled>
  );
}
