import { ColorScales } from '../../types/personalization/typesColors';
import {
  HeaderStyles,
  HeaderStylesByState,
} from '../../types/styles/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getHeaderStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): HeaderStylesByState => {
  const defaultStyles: HeaderStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[100]
        : colorScales.scales[900],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const headerStylesByState: HeaderStylesByState = {
    default: defaultStyles,
  };

  return headerStylesByState;
};
