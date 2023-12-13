import { getBtnStylesByVariant } from '../../components/buttons/AppButton/AppBaseButton.styles';
import {
  ButtonVariants,
  CodesForColorScales,
} from '../../types/personalization/enumsPersonalization';
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
      solid: getBtnStylesByVariant(theme, codeColorScale, ButtonVariants.solid),
      outline: getBtnStylesByVariant(
        theme,
        codeColorScale,
        ButtonVariants.outline,
      ),
    },
  };

  return themeByColor;
};
