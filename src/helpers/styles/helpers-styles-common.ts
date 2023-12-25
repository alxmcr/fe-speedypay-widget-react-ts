import { BLACK_HAZE } from '../../styles/colors';
import { LIGHT_COLOR_SCALES } from '../../styles/colors-scales';
import { ColorScales } from '../../types/personalization/typesColors';
import { AppCommonStyles } from '../../types/personalization/typesStylesTheme';
import { ThemeModes } from '../../types/personalization/typesThemes';

export const getCommonStylesByColorScale = (
  theme: ThemeModes,
  colorScales: ColorScales,
): AppCommonStyles => {
  const baseTheme: AppCommonStyles = {
    backgroundColor:
      theme === ThemeModes.light
        ? BLACK_HAZE[50]
        : LIGHT_COLOR_SCALES.scales[950],
    borderColor:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
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
