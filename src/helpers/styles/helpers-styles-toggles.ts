import { ColorScales } from '../../types/personalization/typesColors';
import {
  ToggleStyles,
  ToggleStylesByState,
} from '../../types/personalization/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getToggleStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): ToggleStylesByState => {
  const defaultStyles: ToggleStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[100]
        : colorScales.scales[300],
    ballBackground:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
  };

  const togglerStylesByStates: ToggleStylesByState = {
    default: defaultStyles,
  };

  return togglerStylesByStates;
};
