import { LIGHT_COLOR_SCALES } from '../../styles/color-scales';
import { ColorScales } from '../../types/personalization/typesColorScales';
import { ThemeModes } from '../../types/personalization/typesThemes';
import {
  TemplatesStyles,
  TemplatesStylesByState,
} from '../../types/styles/typesStylesElements';

export const getTemplatesStyles = (
  theme: ThemeModes,
  colorScales: ColorScales,
): TemplatesStylesByState => {
  const defaultStyles: TemplatesStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? LIGHT_COLOR_SCALES.scales[50]
        : colorScales.scales[950],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[700]
        : colorScales.scales[300],
  };

  const templatesStylesByStates: TemplatesStylesByState = {
    default: defaultStyles,
  };

  return templatesStylesByStates;
};
