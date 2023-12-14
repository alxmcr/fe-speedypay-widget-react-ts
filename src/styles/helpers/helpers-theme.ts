import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { AppStyles, ThemeModes } from '../../types/personalization/typesThemes';
import { getColorScalesByCode } from './helpers-color-scales';
import { getCommonStylesByColorScale } from './helpers-styles';
import { getBtnVariants } from './helpers-styles-button';

export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
): AppStyles => {
  const colorScales: ColorScales = getColorScalesByCode(codeColorScale);
  const commonStyles = getCommonStylesByColorScale(theme, colorScales);

  // Theme
  const themeByColor: AppStyles = {
    mode: theme,
    ...commonStyles,
    buttons: getBtnVariants(theme, colorScales),
  };

  return themeByColor;
};
