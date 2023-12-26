import { getBtnGradientStyles } from '../../components/buttons/ButtonGradient/ButtonGradient.styles';
import { getBtnOutlineStyles } from '../../components/buttons/ButtonOutline/ButtonOutline.styles';
import { getBtnSolidStyles } from '../../components/buttons/ButtonSolid/ButtonSolid.styles';
import { ButtonStylesVariants } from '../../types/personalization/typeVariants';
import { ColorScales } from '../../types/personalization/typesColorsScales';
import {
  ButtonCommonStylesByState,
  ButtonGradientStylesByState,
} from '../../types/styles/typesStylesElements';
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
