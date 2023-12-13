import {
  CodesColorScales,
  ThemeModes,
} from '../../types/personalization/enumsPersonalization';
import { AppTheme } from '../../types/personalization/typesThemes';
import { getThemeByColorScale } from '../helpers/helpers-theme';

export const DARK_THEME_ATOLL: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesColorScales.atoll,
);

export const DARK_THEME_VALHALLA: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesColorScales.valhalla,
);

export const DARK_THEME_WINE_BERRY: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesColorScales.wineBerry,
);
