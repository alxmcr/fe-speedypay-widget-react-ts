import React from 'react';
import { ThemeModes } from '../../types/personalization/typesThemes';
import {
  ToggleModeThemeContext,
  ToggleModeThemeContextData,
} from './ToggleModeThemeContext';

type ToggleModeThemeProviderProps = {
  children: React.ReactNode;
};

export default function ToggleModeThemeProvider({
  children,
}: ToggleModeThemeProviderProps) {
  const [themeMode, setThemeMode] = React.useState(ThemeModes.light);

  const value: ToggleModeThemeContextData = {
    themeMode,
    setThemeMode,
  };

  return (
    <ToggleModeThemeContext.Provider value={value}>
      {children}
    </ToggleModeThemeContext.Provider>
  );
}
