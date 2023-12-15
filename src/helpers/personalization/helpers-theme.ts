import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';
import { getColorScalesByCode } from './helpers-color-scales';
import { getBtnStylesVariants } from '../styles/helpers-styles-button';
import { getCommonStylesByColorScale } from '../styles/helpers-styles-common';
import { getInputStyles } from '../styles/helpers-styles-inputs';
import { getToggleStyles } from '../styles/helpers-styles-toggles';
import { getPillStyles } from '../styles/helpers-styles-pills';
import { getSelectStyles } from '../styles/helpers-styles-selects';

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
      pills: getPillStyles(theme, colorScales),
      selects: getSelectStyles(theme, colorScales),
    },
  };

  return themeByColor;
};
