import { NumberNames } from '../../../types/enumsApp';
import NumberOne from '../NumberOne';
import NumberThree from '../NumberThree';
import NumberTwo from '../NumberTwo';
import { AppNumberStyled } from './AppNumber.styled';

type AppNumberProps = {
  numberName: string;
};

export default function AppNumber({
  numberName = NumberNames.one,
}: AppNumberProps) {
  switch (numberName) {
    case NumberNames.one:
      return (
        <AppNumberStyled>
          <NumberOne />
        </AppNumberStyled>
      );
    case NumberNames.two:
      return (
        <AppNumberStyled>
          <NumberTwo />
        </AppNumberStyled>
      );
    case NumberNames.three:
      return (
        <AppNumberStyled>
          <NumberThree />
        </AppNumberStyled>
      );
    default:
      return (
        <AppNumberStyled>
          <NumberOne />
        </AppNumberStyled>
      );
  }
}
