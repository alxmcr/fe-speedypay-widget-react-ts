import { ColorScales } from '../../../types/personalization/typesColors';
import {
    ButtonGradientStyles,
    ButtonGradientStylesByState,
} from '../../../types/personalization/typesElementsStyles';
import { ThemeModes } from '../../../types/personalization/typesThemes';

export const getBtnGradientStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
) => {
  const defaultStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd: theme === ThemeModes.light ? colorScales.scales[300] : '',
      gradientStart: theme === ThemeModes.light ? colorScales.scales[300] : '',
    },
    colorText: theme === ThemeModes.light ? colorScales.scales[950] : '',
  };

  const hoverStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd: theme === ThemeModes.light ? colorScales.scales[200] : '',
      gradientStart: theme === ThemeModes.light ? colorScales.scales[400] : '',
    },
    colorText: theme === ThemeModes.light ? colorScales.scales[950] : '',
  };

  const activeStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd: theme === ThemeModes.light ? colorScales.scales[400] : '',
      gradientStart: theme === ThemeModes.light ? colorScales.scales[600] : '',
    },
    colorText: theme === ThemeModes.light ? colorScales.scales[950] : '',
  };

  const disabledStyles: ButtonGradientStyles = {
    gradientColors: {
      gradientEnd: theme === ThemeModes.light ? colorScales.scales[700] : '',
      gradientStart: theme === ThemeModes.light ? colorScales.scales[900] : '',
    },
    colorText: theme === ThemeModes.light ? colorScales.scales[100] : '',
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
