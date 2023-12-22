import { ColorScales } from '../../types/personalization/typesColors';
import {
  NumbersStyles,
  NumbersStylesByState,
} from '../../types/styles/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getNumbersStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): NumbersStylesByState => {
  const defaultStyles: NumbersStyles = {
    fillColor:
      theme === ThemeModes.light
        ? colorScales.scales[100]
        : colorScales.scales[900],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const numbersStylesByStates: NumbersStylesByState = {
    default: defaultStyles,
  };

  return numbersStylesByStates;
};
