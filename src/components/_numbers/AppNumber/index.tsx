import { NumberNames } from '../../../types/enumsApp';
import NumberOne from '../NumberOne';
import NumberThree from '../NumberThree';
import NumberTwo from '../NumberTwo';

type AppNumberProps = {
  numberName: string;
};

export default function AppNumber({
  numberName = NumberNames.one,
}: AppNumberProps) {
  switch (numberName) {
    case NumberNames.one:
      return <NumberOne />;
    case NumberNames.two:
      return <NumberTwo />;
    case NumberNames.three:
      return <NumberThree />;
    default:
      return <NumberOne />;
  }
}
