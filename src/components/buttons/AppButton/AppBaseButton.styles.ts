import { IRON_COLOR_SCALES } from '../../../styles/colors-scales';
import { getColorScalesByCode } from '../../../styles/helpers/helpers-color-scales';
import { CodesForColorScales } from '../../../types/personalization/enumsPersonalization';
import { ColorScales } from '../../../types/personalization/typesColors';
import {
    ButtonStyles,
    ButtonStylesByState,
} from '../../../types/personalization/typesStyles';
import { ThemeModes } from '../../../types/personalization/typesThemes';

export const getBtnStylesByVariant = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
  variant = 'solid',
) => {
  if (variant === 'solid') {
    return getBtnSolidStyles(theme, codeColorScale);
  }
  return getBtnSolidStyles(theme, codeColorScale);
};

export const getBtnSolidStyles = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
) => {
  const colorScale: ColorScales = getColorScalesByCode(codeColorScale);

  const defaultStyles: ButtonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScale.scales[500]
        : colorScale.scales[400],
    borderColor:
      theme === ThemeModes.light
        ? colorScale.scales[500]
        : colorScale.scales[400],
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScale.scales[950],
  };

  const hoverStyles: ButtonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScale.scales[600]
        : colorScale.scales[300],
    borderColor:
      theme === ThemeModes.light
        ? colorScale.scales[600]
        : colorScale.scales[300],
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScale.scales[950],
  };

  const activeStyles: ButtonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScale.scales[700]
        : colorScale.scales[500],
    borderColor:
      theme === ThemeModes.light
        ? colorScale.scales[700]
        : colorScale.scales[500],
    colorText:
      theme === ThemeModes.light
        ? IRON_COLOR_SCALES.scales[50]
        : colorScale.scales[950],
  };

  const disabledStyles: ButtonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? colorScale.scales[200]
        : colorScale.scales[800],
    borderColor:
      theme === ThemeModes.light
        ? colorScale.scales[200]
        : colorScale.scales[800],
    colorText:
      theme === ThemeModes.light
        ? colorScale.scales[700]
        : colorScale.scales[100],
    opacity: 0.5,
  };

  const btnStylesByStates: ButtonStylesByState = {
    default: defaultStyles,
    hover: hoverStyles,
    active: activeStyles,
    disabled: disabledStyles,
  };

  return btnStylesByStates;
};
