import React from 'react';
import { LIGHT_THEME_ATOLL } from '../../styles/themes/lightThemes';
import { AppTheme } from '../../types/personalization/typesThemes';

export type ThemingContextData = {
  themePersonalized: AppTheme;
  setThemePersonalized: React.Dispatch<React.SetStateAction<AppTheme>>;
};

const initialThemePersonalized: ThemingContextData = {
  themePersonalized: LIGHT_THEME_ATOLL,
  setThemePersonalized: () => {},
};

export const ThemingContext = React.createContext(initialThemePersonalized);
