import {
  CodesForColorScales,
  ThemeModes,
} from '../../types/personalization/enumsPersonalization';
import { CommonStyles } from '../../types/personalization/typesStyles';
import { IRON } from '../colors';

export const getCommonStylesByColorScale = (
  theme: ThemeModes,
  codeColorScale: CodesForColorScales,
): CommonStyles => {
  const colorScale: ThemeColorScales =
    getPresentationColorScalesByName(codeColorScale);

  const baseTheme: CommonStyles = {
    background: theme === ThemeModes.light ? IRON[50] : colorScale.scales[950],
    borderColor: theme === ThemeModes.light ? IRON[50] : IRON[50],
    scrollBarBackground:
      theme === ThemeModes.light
        ? colorScale.scales[200]
        : colorScale.scales[900],
    scrollBarTrackColor:
      theme === ThemeModes.light
        ? colorScale.scales[950]
        : colorScale.scales[300],
    text:
      theme === ThemeModes.light
        ? colorScale.scales[800]
        : colorScale.scales[300],
  };

  return baseTheme;
};
