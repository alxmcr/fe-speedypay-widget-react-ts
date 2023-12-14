import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';
import { getColorScalesByCode } from './helpers-color-scales';
import { getBtnStylesVariants } from './helpers-styles-button';
import { getCommonStylesByColorScale } from './helpers-styles-common';
import { getInputStyles } from './helpers-styles-inputs';
import { getToggleStyles } from './helpers-styles-toggles';

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
      buttons: getBtnStylesVariants(theme, colorScales),
      togglers: getToggleStyles(theme, colorScales),
      inputs: getInputStyles(theme, colorScales),
    },
  };

  return themeByColor;
};
