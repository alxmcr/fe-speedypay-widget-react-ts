import { IRON_COLOR_SCALES } from '../../styles/colors-scales';
import { ColorScales } from '../../types/personalization/typesColors';
import {
  SelectStyles,
  SelectStylesByState,
} from '../../types/personalization/typesStylesElements';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getSelectStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): SelectStylesByState => {
  const defaultStyles: SelectStyles = {
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
        : colorScales.scales[500],
  };
  const focusStyles: SelectStyles = {
    backgroundColor: 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[500],
    placeholderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[300]
        : colorScales.scales[700],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : colorScales.scales[500],
  };
  const disabledStyles: SelectStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[100]
        : IRON_COLOR_SCALES.scales[950],
    borderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[400]
        : IRON_COLOR_SCALES.scales[700],
    placeholderColor:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[600]
        : IRON_COLOR_SCALES.scales[600],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : IRON_COLOR_SCALES.scales[500],
  };

  const selectStylesByStates: SelectStylesByState = {
    default: defaultStyles,
    focus: focusStyles,
    disabled: disabledStyles,
  };

  return selectStylesByStates;
};
