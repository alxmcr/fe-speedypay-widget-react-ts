import React from 'react';
import { getThemeByColorScale } from '../../helpers/personalization/helpers-theme';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';

export const DARK_THEME_ATOLL: AppTheme = getThemeByColorScale(
  ThemeModes.dark,
  CodesForColorScales.atoll,
);

export type ThemingContextData = {
  themePersonalized: AppTheme;
  setThemePersonalized: React.Dispatch<React.SetStateAction<AppTheme>>;
};

const initialThemePersonalized: ThemingContextData = {
  themePersonalized: DARK_THEME_ATOLL,
  setThemePersonalized: () => {},
};

export const ThemingContext = React.createContext(initialThemePersonalized);
