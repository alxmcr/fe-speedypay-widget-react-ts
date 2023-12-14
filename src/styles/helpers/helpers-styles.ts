import { ColorScales } from '../../types/personalization/typesColors';
import { AppCommonStyles } from '../../types/personalization/typesStyles';
import { ThemeModes } from '../../types/personalization/typesThemes';
import { IRON } from '../colors';

export const getCommonStylesByColorScale = (
  theme: ThemeModes,
  colorScales: ColorScales,
): AppCommonStyles => {
  const baseTheme: AppCommonStyles = {
    background: theme === ThemeModes.light ? IRON[50] : colorScales.scales[950],
    borderColor: theme === ThemeModes.light ? IRON[50] : IRON[50],
    scrollBarBackground:
      theme === ThemeModes.light
        ? colorScales.scales[200]
        : colorScales.scales[900],
    scrollBarTrackColor:
      theme === ThemeModes.light
        ? colorScales.scales[950]
        : colorScales.scales[300],
    text:
      theme === ThemeModes.light
        ? colorScales.scales[800]
        : colorScales.scales[300],
  };

  return baseTheme;
};
