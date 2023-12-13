import { getBtnStylesByVariant } from '../../components/buttons/AppButton/AppBaseButton.styles';
import {
  CodeForBtnVariants,
  CodesForColorScales,
} from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { ButtonStylesByState } from '../../types/personalization/typesStyles';
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
  const stylesBtnSolid: ButtonStylesByState = getBtnStylesByVariant(
    theme,
    colorScales,
    CodeForBtnVariants.solid,
  );
  const stylesBtnOutline: ButtonStylesByState = getBtnStylesByVariant(
    theme,
    colorScales,
    CodeForBtnVariants.outline,
  );

  const btnVariants = {
    solid: stylesBtnSolid,
    outline: stylesBtnOutline,
  };

  // Theme
  const themeByColor: AppTheme = {
    mode: theme,
    ...commonStyles,
    buttons: btnVariants,
  };

  return themeByColor;
};
