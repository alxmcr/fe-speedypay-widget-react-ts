import { getBtnStylesByVariant } from '../../components/buttons/AppButton/AppBaseButton.styles';
import {
  ButtonVariants,
  CodesForColorScales,
} from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';
import { getColorScalesByCode } from './helpers-color-scales';
import { getCommonStylesByColorScale } from './helpers-styles';

export const getThemeByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
): AppTheme => {
  const colorScales: ColorScales = getColorScalesByCode(codeColorScale);
  const commonStyles = getCommonStylesByColorScale(theme, colorScales);

  // Button styles
  const stylesBtnSolid = getBtnStylesByVariant(
    theme,
    colorScales,
    ButtonVariants.solid,
  );
  const stylesBtnOutline = getBtnStylesByVariant(
    theme,
    colorScales,
    ButtonVariants.outline,
  );

  // Theme
  const themeByColor: AppTheme = {
    mode: theme,
    ...commonStyles,
    buttons: {
      solid: stylesBtnSolid,
      outline: stylesBtnOutline,
    },
  };

  return themeByColor;
};
