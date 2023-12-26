import { IRON_COLOR_SCALES } from '../../../styles/colors-scales';
import { ColorScales } from '../../../types/personalization/typesColorsScales';
import {
  ButtonGradientStyles,
  ButtonGradientStylesByState,
} from '../../../types/styles/typesStylesElements';
import { ThemeModes } from '../../../types/personalization/typesThemes';

export const getBtnGradientStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
) => {
  const defaultStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd:
        theme === ThemeModes.light
          ? colorScales.scales[400]
          : colorScales.scales[300],
      gradientStart:
        theme === ThemeModes.light
          ? colorScales.scales[600]
          : colorScales.scales[500],
    },
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
  };

  const hoverStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd:
        theme === ThemeModes.light
          ? colorScales.scales[400]
          : colorScales.scales[200],
      gradientStart:
        theme === ThemeModes.light
          ? colorScales.scales[600]
          : colorScales.scales[400],
    },
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
  };

  const activeStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd:
        theme === ThemeModes.light
          ? colorScales.scales[600]
          : colorScales.scales[400],
      gradientStart:
        theme === ThemeModes.light
          ? colorScales.scales[800]
          : colorScales.scales[600],
    },
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
  };

  const disabledStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd:
        theme === ThemeModes.light
          ? colorScales.scales[100]
          : colorScales.scales[700],
      gradientStart:
        theme === ThemeModes.light
          ? colorScales.scales[300]
          : colorScales.scales[900],
    },
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScales.scales[100],
    opacity: 0.5,
  };

  const btnStylesByStates: ButtonGradientStylesByState = {
    default: defaultStyles,
    hover: hoverStyles,
    active: activeStyles,
    disabled: disabledStyles,
  };

  return btnStylesByStates;
};
