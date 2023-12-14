import React from 'react';
import { ThemeModes } from '../../types/personalization/typesThemes';

export type ToggleModeThemeContextData = {
  themeMode: ThemeModes;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModes>>;
};

const initialThemeMode: ToggleModeThemeContextData = {
  themeMode: ThemeModes.light,
  setThemeMode: () => {},
};

export const ToggleModeThemeContext = React.createContext(initialThemeMode);
