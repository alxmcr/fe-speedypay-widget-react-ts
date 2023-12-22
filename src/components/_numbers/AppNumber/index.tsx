import React from 'react';
import { ThemingContext } from '../../../providers/personalization/ThemingProvider/ThemingContext';
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
  const { themePersonalized } = React.useContext(ThemingContext);

  switch (numberName) {
    case NumberNames.one:
      return (
        <AppNumberStyled>
          <NumberOne
            fillColor={themePersonalized.styles.numbers.default.fillColor}
          />
        </AppNumberStyled>
      );
    case NumberNames.two:
      return (
        <AppNumberStyled>
          <NumberTwo
            fillColor={themePersonalized.styles.numbers.default.fillColor}
          />
        </AppNumberStyled>
      );
    case NumberNames.three:
      return (
        <AppNumberStyled>
          <NumberThree
            fillColor={themePersonalized.styles.numbers.default.fillColor}
          />
        </AppNumberStyled>
      );
    default:
      return (
        <AppNumberStyled>
          <NumberOne
            fillColor={themePersonalized.styles.numbers.default.fillColor}
          />
        </AppNumberStyled>
      );
  }
}
