import {
  CodesForColorScales,
  ThemeModes,
} from '../../types/personalization/enumsPersonalization';
import { AppTheme } from '../../types/personalization/typesThemes';

export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
): AppTheme => {
  const commonStyles = getCommonStylesByColorScale(theme, codeColorScale);

  const themeByColor: AppTheme = {
    ...commonStyles,
    mode: theme,
    buttons: {
      solid: getStylesForButtonSolidStates(theme, codeColorScale),
      outline: getStylesForButtonOutlineStates(theme, codeColorScale),
    },
  };

  return themeByColor;
};
