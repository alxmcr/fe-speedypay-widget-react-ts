import {
  getBtnGradientStyles,
  getBtnOutlineStyles,
  getBtnSolidStyles,
} from '../../components/buttons/AppButton/AppBaseButton.styles';
import { ButtonStylesVariants } from '../../types/personalization/typeVariants';
import { ColorScales } from '../../types/personalization/typesColors';
import {
  ButtonCommonStylesByState,
  ButtonGradientStylesByState,
} from '../../types/personalization/typesElementsStyles';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getBtnStylesVariants = (
  theme: ThemeModes,
  colorScales: ColorScales,
) => {
  // Button styles
  const stylesBtnSolid: ButtonCommonStylesByState = getBtnSolidStyles(
    theme,
    colorScales,
  );
  const stylesBtnOutline: ButtonCommonStylesByState = getBtnOutlineStyles(
    theme,
    colorScales,
  );

  const stylesBtnGradient: ButtonGradientStylesByState = getBtnGradientStyles(
    theme,
    colorScales,
  );

  const btnVariants: ButtonStylesVariants = {
    solid: stylesBtnSolid,
    outline: stylesBtnOutline,
    gradient: stylesBtnGradient,
  };

  return btnVariants;
};
