import React from 'react';
import { LIGHT_THEME_ATOLL } from '../../styles/themes/lightThemes';
import { AppTheme } from '../../types/personalization/typesThemes';

export type ThemeModeStyledContextData = {
  themePersonalized: AppTheme;
  setThemePersonalized: React.Dispatch<React.SetStateAction<AppTheme>>;
};

const initialThemePersonalized: ThemeModeStyledContextData = {
  themePersonalized: LIGHT_THEME_ATOLL,
  setThemePersonalized: () => {},
};

export const ThemeModeStyledContext = React.createContext(
  initialThemePersonalized,
);
