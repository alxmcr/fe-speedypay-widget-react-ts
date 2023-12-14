import { getBtnStylesByVariant } from '../../components/buttons/AppButton/AppBaseButton.styles';
import { CodeForBtnVariants } from '../../types/personalization/enumsPersonalization';
import { ButtonStylesVariants } from '../../types/personalization/typeVariants';
import { ColorScales } from '../../types/personalization/typesColors';
import { ButtonStylesByState } from '../../types/personalization/typesElementsStyles';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getBtnStylesVariants = (theme: ThemeModes, colorScales: ColorScales) => {
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

  const btnVariants: ButtonStylesVariants = {
    solid: stylesBtnSolid,
    outline: stylesBtnOutline,
  };

  return btnVariants;
};
