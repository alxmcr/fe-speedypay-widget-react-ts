import { IRON_COLOR_SCALES } from '../../../styles/colors-scales';
import { ColorScales } from '../../../types/personalization/typesColorScales';
import {
  ButtonCommonStyles,
  ButtonCommonStylesByState,
} from '../../../types/styles/typesStylesElements';
import { ThemeModes } from '../../../types/personalization/typesThemes';

export const getBtnSolidStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
) => {
  const defaultStyles: ButtonCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[500]
        : colorScales.scales[400],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[500]
        : colorScales.scales[400],
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
  };

  const hoverStyles: ButtonCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[600]
        : colorScales.scales[300],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[600]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
  };

  const activeStyles: ButtonCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[500],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[500],
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
  };

  const disabledStyles: ButtonCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[200]
        : colorScales.scales[800],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[200]
        : colorScales.scales[800],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[100],
    opacity: 0.5,
  };

  const btnStylesByStates: ButtonCommonStylesByState = {
    default: defaultStyles,
    hover: hoverStyles,
    active: activeStyles,
    disabled: disabledStyles,
  };

  return btnStylesByStates;
};
