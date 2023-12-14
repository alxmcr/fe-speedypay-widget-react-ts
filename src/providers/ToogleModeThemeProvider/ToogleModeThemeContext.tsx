import React from 'react';
import { ThemeModes } from '../../types/personalization/typesThemes';

export type ToogleModeThemeContextData = {
  themeMode: ThemeModes;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModes>>;
};

const initialThemeMode: ToogleModeThemeContextData = {
  themeMode: ThemeModes.light,
  setThemeMode: () => {},
};

export const ToogleModeThemeContext = React.createContext(initialThemeMode);
