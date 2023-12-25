import { ColorScales } from '../../types/personalization/typesColors';
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
        ? colorScales.scales[100]
        : colorScales.scales[900],
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
