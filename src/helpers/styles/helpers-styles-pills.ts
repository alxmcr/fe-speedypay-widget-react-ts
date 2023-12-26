import { ColorScales } from '../../types/personalization/typesColorScales';
import {
  PillStyles,
  PillStylesByState,
} from '../../types/styles/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getPillStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): PillStylesByState => {
  const defaultStyles: PillStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[900]
        : colorScales.scales[300],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[900]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[300]
        : colorScales.scales[900],
  };

  const pillAmountToPayStylesByStates: PillStylesByState = {
    default: defaultStyles,
  };

  return pillAmountToPayStylesByStates;
};
