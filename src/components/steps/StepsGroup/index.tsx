import { ResultStep } from '../../../types/appTypes';
import AppStep from '../AppStep';

type StepsGroupProps = {
  steps: ResultStep[];
};

export default function StepsGroup({ steps = [] }: StepsGroupProps) {
  return (
    <div>
      {steps.map((step: ResultStep) => (
        <AppStep key={step.id} text={step.name} stepNumber="1" />
      ))}
    </div>
  );
}
