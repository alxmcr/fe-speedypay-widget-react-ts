import {
  getBtnOutlineStyles,
  getBtnSolidStyles,
} from '../../components/buttons/AppButton/AppBaseButton.styles';
import { CodeForBtnVariants } from '../../types/personalization/enumsPersonalization';
import { ButtonStylesVariants } from '../../types/personalization/typeVariants';
import { ColorScales } from '../../types/personalization/typesColors';
import { ButtonCommonStylesByState } from '../../types/personalization/typesElementsStyles';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getBtnStylesByVariant = (
  theme: ThemeModes,
  colorScales: ColorScales,
  variant = 'solid',
) => {
  if (variant === 'solid') {
    return getBtnSolidStyles(theme, colorScales);
  }
  return getBtnOutlineStyles(theme, colorScales);
};

export const getBtnStylesVariants = (
  theme: ThemeModes,
  colorScales: ColorScales,
) => {
  // Button styles
  const stylesBtnSolid: ButtonCommonStylesByState = getBtnStylesByVariant(
    theme,
    colorScales,
    CodeForBtnVariants.solid,
  );
  const stylesBtnOutline: ButtonCommonStylesByState = getBtnStylesByVariant(
    theme,
    colorScales,
    CodeForBtnVariants.outline,
  );

  const btnVariants: ButtonStylesVariants = {
    solid: stylesBtnSolid,
    outline: stylesBtnOutline,
  };

  return btnVariants;
};
