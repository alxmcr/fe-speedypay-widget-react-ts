import {
  CodesForColorScales,
  ThemeModes,
} from '../../types/personalization/enumsPersonalization';
import { AppTheme } from '../../types/personalization/typesThemes';
import { getThemeByColorScale } from '../helpers/helpers-theme';

export const DARK_THEME_ATOLL: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesForColorScales.atoll,
);

export const DARK_THEME_VALHALLA: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesForColorScales.valhalla,
);

export const DARK_THEME_WINE_BERRY: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesForColorScales.wineBerry,
);
