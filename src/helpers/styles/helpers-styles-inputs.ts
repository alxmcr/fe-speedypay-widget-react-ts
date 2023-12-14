import { IRON_COLOR_SCALES } from '../../styles/colors-scales';
import { ColorScales } from '../../types/personalization/typesColors';
import {
    InputStyles,
    InputStylesByState,
} from '../../types/personalization/typesElementsStyles';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getInputStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): InputStylesByState => {
  const defaultStyles: InputStyles = {
    backgroundColor: 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[300]
        : colorScales.scales[800],
    placeholderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[300]
        : colorScales.scales[700],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : IRON_COLOR_SCALES.scales[50],
  };
  const focusStyles: InputStyles = {
    backgroundColor: 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[500],
    placeholderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[200]
        : colorScales.scales[200],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : IRON_COLOR_SCALES.scales[50],
  };
  const disabledStyles: InputStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[100]
        : IRON_COLOR_SCALES.scales[300],
    borderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[400]
        : IRON_COLOR_SCALES.scales[300],
    placeholderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[600]
        : IRON_COLOR_SCALES.scales[500],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : IRON_COLOR_SCALES.scales[900],
  };

  const inputStylesByStates: InputStylesByState = {
    default: defaultStyles,
    focus: focusStyles,
    disabled: disabledStyles,
  };

  return inputStylesByStates;
};
