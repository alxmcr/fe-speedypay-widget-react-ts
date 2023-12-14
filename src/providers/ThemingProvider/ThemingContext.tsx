import React from 'react';
import { getThemeByColorScale } from '../../styles/helpers/helpers-theme';
import { CodesForColorScales } from '../../types/personalization/enumsPersonalization';
import { AppTheme, ThemeModes } from '../../types/personalization/typesThemes';

export const LIGHT_THEME_ATOLL: AppTheme = getThemeByColorScale(
  ThemeModes.light,
  CodesForColorScales.atoll,
);

export type ThemingContextData = {
  themePersonalized: AppTheme;
  setThemePersonalized: React.Dispatch<React.SetStateAction<AppTheme>>;
};

const initialThemePersonalized: ThemingContextData = {
  themePersonalized: LIGHT_THEME_ATOLL,
  setThemePersonalized: () => {},
};

export const ThemingContext = React.createContext(initialThemePersonalized);
