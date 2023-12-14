import { ColorScales } from '../../../types/personalization/typesColors';
import {
    ToggleStyles,
    ToggleStylesByState,
} from '../../../types/personalization/typesStyles';
import { ThemeModes } from '../../../types/personalization/typesThemes';

export const getStylesForTogglerStates = (
  theme: ThemeModes,
  colorScales: ColorScales,
): ToggleStylesByState => {
  const defaultStyles: ToggleStyles = {
    background:
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
