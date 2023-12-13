import {
  CodesColorScales,
  ThemeModes,
} from '../../types/personalization/enumsPersonalization';
import { AppTheme } from '../../types/personalization/typesThemes';

export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesColorScales,
): AppTheme => {
  const commonStyles = getCommonStylesByColorScale(theme, codeColorScale);

  const themeByColor: AppTheme = {
    ...commonStyles,
    buttons: {
      solid: getStylesForButtonSolidStates(theme, codeColorScale),
      outline: getStylesForButtonOutlineStates(theme, codeColorScale),
    },
  };

  return themeByColor;
};
