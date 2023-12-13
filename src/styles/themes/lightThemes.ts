import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';
import { getThemeByColorScale } from '../helpers/helpers-theme';

export const LIGHT_THEME_ATOLL: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesForColorScales.atoll,
);

export const LIGHT_THEME_VALHALLA: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesForColorScales.valhalla,
);

export const LIGHT_THEME_WINE_BERRY: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesForColorScales.wineBerry,
);
