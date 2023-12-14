import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';
import { getColorScalesByCode } from './helpers-color-scales';
import { getCommonStylesByColorScale } from './helpers-styles-common';
import { getBtnVariants } from './helpers-styles-button';

export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
): AppTheme => {
  const colorScales: ColorScales = getColorScalesByCode(codeColorScale);
  const commonStyles = getCommonStylesByColorScale(theme, colorScales);

  // Theme
  const themeByColor: AppTheme = {
    mode: theme,
    styles: {
      ...commonStyles,
      buttons: getBtnVariants(theme, colorScales),
    },
  };

  return themeByColor;
};
