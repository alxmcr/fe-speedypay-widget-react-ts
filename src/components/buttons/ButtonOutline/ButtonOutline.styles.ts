import { IRON_COLOR_SCALES } from '../../../styles/colors-scales';
import { ColorScales } from '../../../types/personalization/typesColors';
import {
  ButtonCommonStyles,
  ButtonCommonStylesByState,
} from '../../../types/personalization/typesElementsStyles';
import { ThemeModes } from '../../../types/personalization/typesThemes';

export const getBtnOutlineStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
) => {
  const defaultStyles: ButtonCommonStyles = {
    backgroundColor: theme === ThemeModes.light ? 'transparent' : 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const hoverStyles: ButtonCommonStyles = {
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

  const activeStyles: ButtonCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScales.scales[100]
        : colorScales.scales[900],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const disabledStyles: ButtonCommonStyles = {
    backgroundColor: theme === ThemeModes.light ? 'transparent' : 'transparent',
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
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
