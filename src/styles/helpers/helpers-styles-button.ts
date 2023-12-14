import { getBtnStylesByVariant } from '../../components/buttons/AppButton/AppBaseButton.styles';
import { CodeForBtnVariants } from '../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../types/personalization/typesColors';
import { ButtonStylesByState } from '../../types/personalization/typesStyles';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getBtnVariants = (theme: ThemeModes, colorScales: ColorScales) => {
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

  return btnVariants;
};
