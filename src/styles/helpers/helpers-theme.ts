import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';
import { getCommonStylesByColorScale } from './helpers-styles';

export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
): AppTheme => {
  const commonStyles = getCommonStylesByColorScale(theme, codeColorScale);

  const themeByColor: AppTheme = {
    mode: theme,
    ...commonStyles,
    buttons: {
      solid: getStylesForButtonSolidStates(theme, codeColorScale),
      outline: getStylesForButtonOutlineStates(theme, codeColorScale),
    },
  };

  return themeByColor;
};
