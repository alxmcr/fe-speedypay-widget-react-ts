import {
  CodesColorScales,
  ThemeModes,
} from '../../types/personalization/enumsPersonalization';
import { AppTheme } from '../../types/personalization/typesThemes';
import { getThemeByColorScale } from '../helpers/helpers-theme';

export const LIGHT_THEME_ATOLL: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesColorScales.atoll,
);

export const LIGHT_THEME_VALHALLA: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesColorScales.valhalla,
);

export const LIGHT_THEME_WINE_BERRY: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesColorScales.wineBerry,
);
