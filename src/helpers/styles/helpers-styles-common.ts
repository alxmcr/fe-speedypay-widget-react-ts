import { AppCommonStyles } from '../../types/personalization/typesAppStyles';
import { ColorScales } from '../../types/personalization/typesColors';
import { ThemeModes } from '../../types/personalization/typesThemes';
import { IRON } from '../../styles/colors';

export const getCommonStylesByColorScale = (
  theme: ThemeModes,
  colorScales: ColorScales,
): AppCommonStyles => {
  const baseTheme: AppCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light ? IRON[50] : colorScales.scales[950],
    borderColor: theme === ThemeModes.light ? IRON[50] : IRON[50],
    scrollBarBackground:
      theme === ThemeModes.light
        ? colorScales.scales[200]
        : colorScales.scales[900],
    scrollBarTrackColor:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
    colorText:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : colorScales.scales[300],
  };

  return baseTheme;
};
